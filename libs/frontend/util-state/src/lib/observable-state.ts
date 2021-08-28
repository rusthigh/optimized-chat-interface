
import { Injectable, OnDestroy } from '@angular/core';
import {
  BehaviorSubject,
  connectable,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  observeOn,
  pipe,
  queueScheduler,
  ReplaySubject,
  Subject,
  takeUntil,
  UnaryFunction
} from 'rxjs';

const filterAndMapToT: <T>() => UnaryFunction<
  Observable<T | null>,
  Observable<T>
> = <T>() =>
  pipe(
    filter((v: T | null) => v !== null),
    map((v) => v as T)
  );

@Injectable()
export class ObservableState<T extends Record<string, unknown>>
  implements OnDestroy
{
  private readonly notInitializedError =
    'State not initialized yet, call the initialize() method';
  protected readonly destroy$$ = new Subject<void>();
  private readonly state$$ = new BehaviorSubject<T | null>(null);

  /**
   * Return the entire state as an observable
   */
  public readonly state$ = connectable(
    this.state$$.pipe(
      filterAndMapToT<T>(),
      distinctUntilChanged((previous: T, current: T) =>
        Object.keys(current).every(
          (key: string) => current[key as keyof T] === previous[key as keyof T]
        )
      ),
      takeUntil(this.destroy$$)
    ),
    { connector: () => new ReplaySubject(1) }
  );

  /**
   * Get a snapshot of the current state. This method is needed when we want to fetch the
   * state in functions. We don't have to use withLatestFrom if we want to keep it simple.
   */
  public get snapshot(): T {
    if (!this.state$$.value) {
      throw new Error(this.notInitializedError);
    }
    return this.state$$.value as T;
  }

  /**
   * Observable state doesn't work without initializing it first. Our state always needs
   * an initial state. You can pass the @InputState() as an optional parameter.
   * Passing that @InputState() will automatically feed the state with the correct values
   * @param state
   * @param inputState$
   */
  public initialize(state: T, inputState$?: Observable<Partial<T>>): void {
    this.state$.connect();