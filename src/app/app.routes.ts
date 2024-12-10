import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((i) => i.HomeComponent),
  },

  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (i) => i.DashboardComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/todos/todos.component').then(
            (i) => i.TodoTableComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./pages/profile/profile.component').then(
            (i) => i.ProfileComponent
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (i) => i.NotFoundComponent
      ),
  },
];
