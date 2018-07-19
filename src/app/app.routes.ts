import { RouterModule } from '@angular/router';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ManagementComponent } from 'src/app/management/management.component';

export const AppRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/blog'
    }
]