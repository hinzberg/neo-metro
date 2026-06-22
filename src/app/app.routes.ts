import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./main/main.page').then((m) => m.MainPage)
  },
  {
    path: 'info',
    loadComponent: () =>
      import('./info/info.page').then((m) => m.InfoPage)
  }
];
