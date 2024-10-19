import { Routes } from '@angular/router';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Estudo/Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'content',
    title: 'Estudo/Content',
    loadComponent: () =>
      import('./pages/content/content.component').then(
        (m) => m.ContentComponent
      ),
  },
];
