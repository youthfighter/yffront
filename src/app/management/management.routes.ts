import { Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ArticlesListComponent } from './home/articles-list/articles-list.component';
import { ArticleComponent } from './home/article/article.component';
import { IndexComponent } from './home/index/index.component';

export const managementRoutes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: HomeComponent,
                children: [
                    {
                        path: '',
                        component: IndexComponent,
                    },
                    {
                        path: 'articles',
                        component: ArticlesListComponent,
                    },
                    {
                        path: 'article',
                        component: ArticleComponent
                    },
                    {
                        path: 'article/:id',
                        component: ArticleComponent
                    }
                ]
            }
        ]
    }
]