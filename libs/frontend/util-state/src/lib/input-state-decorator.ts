import { SimpleChange } from '@angular/core';
import { InputStateModel } from './input-state-model';
import { TypedSimpleChanges } from './typed-simple-changes';

export function InputState<T>() {
  return function (target: any, key: string): any {
    // This secretModel will actually be kept as a property on the instance of
    // the comp