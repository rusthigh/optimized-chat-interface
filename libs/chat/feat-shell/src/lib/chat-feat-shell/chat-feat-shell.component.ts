import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeaderUiComponent,
  SidebarUiComponent
} from '@ameliorated-chat/frontend/ui-design-system';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ObservableState } from '@ameliorated-chat/frontend/util-state';
import { FacadeService } from '../facade.service';
import { map, Observable } from 'rxjs';
import {
  getCurrentId,
  SidebarContentSmartComponent,
  SidebarFooterContentUiComponent
} from '@ameliorated-chat/chat/feat-chat';
import { Chat } from '@ameliorated-chat/chat/type-chat';
import { SettingsIconUiComponent } from '@ameliorated-chat/frontend/ui-ic