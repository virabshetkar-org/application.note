import { provideHttpClient } from '@angular/common/http';
import { Routes } from '@angular/router';
import { ConfigurationService } from './shared/services/configuration.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/note/note.page').then((c) => c.NotePage),
    providers: [provideHttpClient(), ConfigurationService],
  },
];
