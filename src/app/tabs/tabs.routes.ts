import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'spit',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../Home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'faculty',
        loadComponent: () =>
          import('../Faculty/faculty.page').then((m) => m.FacultyPage),
      },
      {
        path: 'events',
        loadComponent: () =>
          import('../Events/event.page').then((m) => m.EventPage),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('../Feedback/feedback.page').then((m) => m.FeedbackPage),
      },
      {
        path: '',
        redirectTo: '/spit/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/spit/home',
    pathMatch: 'full',
  },
];
