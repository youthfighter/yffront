import { RouterModule } from '@angular/router';
import { BlogComponent } from 'src/app/blog/blog.component';

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