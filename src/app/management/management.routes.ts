import { Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { HomeComponent } from 'src/app/management/home/home.component';
import { LoginComponent } from 'src/app/management/login/login.component';
import { ArticlesListComponent } from 'src/app/management/home/articles-list/articles-list.component';

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
                        component: ArticlesListComponent,
                    }
                ]
            }
        ]
    }
]