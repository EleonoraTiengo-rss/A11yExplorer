import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/learn', pathMatch: 'full' },
  { 
    path: 'learn', 
    loadComponent: () => import('./pages/learn/learn.component').then(m => m.LearnComponent)
  },
  { 
    path: 'demo', 
    loadComponent: () => import('./pages/demo/demo.component').then(m => m.DemoComponent)
  },
  { path: '**', redirectTo: '/learn' }
];
