import { RouterModule } from '@angular/router';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ManagementComponent } from 'src/app/management/management.component';
import { DetailComponent } from 'src/app/blog/detail/detail.component';
import { ArticlesComponent } from 'src/app/blog/articles/articles.component';
import { IndexComponent } from './index/index.component';

export const BlogRoutes = [
    {
        path: '',
        component: BlogComponent,
        children: [
            {
                path: '',
                component: IndexComponent
            },
            {
                path: 'articles',
                component: ArticlesComponent
            },
            {
                path: 'article/:id',
                component: DetailComponent
            }
        ]
    }
]