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
import { map, Observable } from '