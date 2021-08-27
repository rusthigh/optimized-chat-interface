import { SimpleChange } from '@angular/core';
import { InputStateModel } from './input-state-model';
import { TypedSimpleChanges } from './typed-simple-changes';

export function InputState<T>() {
  return function (target: any, key: string): any {
    // This secretModel will actually be kept as a property on the instance of
    // the component that uses this InputState decorator
    const secretInputModel = `secret${key}Model`;
    // This accessor is used to get access to the secretInputModel
    // This property will not exist on the instance of the component
    // that uses this InputState decorator
    const accessorInputModel = `accessor${key}Model`;

    // Keep track of the original 3 lifecycle hooks
    const origNgOnChanges = target.constructor.prototype.ngOnChanges;
    const origNgOnDestroy = target.constructor.prototype.ngOnDestroy;
    const origNgOnInit = target.construc