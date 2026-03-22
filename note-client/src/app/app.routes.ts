import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/note/note.page').then((c) => c.NotePage),
  },
];
