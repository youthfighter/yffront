import { RouterModule } from '@angular/router';

export const AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/blog'
    },
    {
        path: 'blog',
        loadChildren:'./blog/blog.module#BlogModule'
    },
    {
        path: 'management',
        loadChildren:'./management/management.module#ManagementModule'
    }
]