import { Routes } from '@angular/router';
import { ManagementComponent } from './management.component';
import { HomeComponent } from 'src/app/management/home/home.component';
import { LoginComponent } from 'src/app/management/login/login.component';

export const managementRoutes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
]