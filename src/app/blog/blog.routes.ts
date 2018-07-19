import { RouterModule } from '@angular/router';
import { BlogComponent } from 'src/app/blog/blog.component';
import { ManagementComponent } from 'src/app/management/management.component';
import { IndexComponent } from 'src/app/blog/index/index.component';
import { DetailComponent } from 'src/app/blog/detail/detail.component';
import { ArticlesComponent } from 'src/app/blog/articles/articles.component';

export const BlogRoutes = [
    {
        path: 'blog',
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
            },
        ]
    }
]