import { bootstrapApplication } from '@angular/platform-browser';
import {
  provideRouter,
  TitleStrategy,
  withEnabledBlockingInitialNavigation
} from '@angular/router';
import { appRoutes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpCli