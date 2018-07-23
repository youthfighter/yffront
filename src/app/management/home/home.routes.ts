import { Routes } from '@angular/router';
import { ArticlesListComponent } from 'src/app/management/home/articles-list/articles-list.component';

export const homeConfig: Routes = [
    {
        path: '',
        component: ArticlesListComponent,
    }
]