import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', redirectTo: 'auth', pathMatch: 'full'
    },
    {
        path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    }
];
