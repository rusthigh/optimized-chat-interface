import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  getDefaultInputState,
  InputState,
  ObservableState
} from '@ameliorated-chat/frontend/util-state';
import { map, Observable } from 'rxjs';

type PageViewModel = {
  sidebarOpen: boolean;
  showSendOnEnterCheckbox: boolean;
  message: string;
  sendOnEnter: boolean;
};

type ChatboxInputState = {
  sendOnEnter: boole