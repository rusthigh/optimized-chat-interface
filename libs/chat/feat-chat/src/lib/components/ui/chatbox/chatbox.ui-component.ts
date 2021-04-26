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
  sendOnEnter: boolean;
  sidebarOpen: boolean;
};

type State = ChatboxInputState & {
  message: string;
};

@Component({
  selector: 'ac-chatbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbox.ui-component.html',
  styleUrls: ['./chatbox.ui-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatboxUiComponent extends ObservableState<State> {
  @InputState()
  private readonly inputState$!: Observable<ChatboxInputState>;

  @Input() public sidebarOpen = false;
  @Input() public sen