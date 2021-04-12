import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message, Role } from '@ameliorated-chat/chat/type-chat';
import { InputState } from '@ameliorated-chat/frontend/util-state';
import { map, Observable } from 'rxjs';

type ChatMessageInputState = {
  message: Message | null;
  userProfilePicUrl: string;
};

type ViewModel = {
  message: string;
  avatarUrl: string;
  isUserMessage: boolean;
  isSystemMessage: boolean;
  isAssistantMessage: boolean;
  isDefaultUserIcon: boolean;
};

@Component({
  selector: 'ac-chat-message',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat-message.ui-component.html',
  styleUrls: ['./chat-message.ui-component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageUiComponent {
  @InputState()
  private r