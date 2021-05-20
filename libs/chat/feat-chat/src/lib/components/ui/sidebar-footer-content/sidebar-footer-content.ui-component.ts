import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GithubIconUiComponent,
  TwitterIconUiComponent
} from '@ameliorated-chat/frontend/ui-icons';
import { FacadeService } from '../../../facade.service';
import { map, Observable } from 'rxjs';

type PageVie