import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/blog/header/header.component';
import { FooterComponent } from 'src/app/blog/footer/footer.component';
import { BlogComponent } from 'src/app/blog/blog.component';
import { RouterModule } from '@angular/router';
import { BlogRoutes } from 'src/app/blog/blog.routes';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { FavoriteBooksComponent } from './index/favorite-books/favorite-books.component';
import { IndexModule } from 'src/app/blog/index/index.module';
import { ArticlesComponent } from './articles/articles.component';
import { SynopsisComponent } from './articles/synopsis/synopsis.component';
import { ButtonModule } from 'primeng/button';
import {PaginatorModule} from 'primeng/paginator';
import { ShareModule } from './share/share.module';
import { ArticleComponent } from './detail/article/article.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    ButtonModule,
    IndexModule,
    PaginatorModule,
    ShareModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    DetailComponent,
    ArticlesComponent,
    SynopsisComponent,
    ArticleComponent
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
