import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  TrackByFunction
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chat } from '@ameliorated-chat/chat/type-chat';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EditableUiComponent } from '@ameliorated-chat/frontend/ui-design-system';
import { InputState } from '@ameliorated-chat/frontend/util-state';
import { map, Observable } from 'rxjs';

type ViewModel = {
  favoritedChats: Chat[];
  allChats: Chat[];
  currentChatId: string | null;
  showEmptyState: boolean;
};

type ChatListInputState = {
  chats: Chat[];
  currentChatId: string | null;
};

@Component({
  selector: 'ac-chat-list',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, EditableUiComponent],
  templateUrl: './chat-list.ui-component.html',
  styleUrls: ['./chat-list.ui-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatListUiComponent {
  @InputState()
  private readonly inputSta