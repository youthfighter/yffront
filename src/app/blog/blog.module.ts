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

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    IndexModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    BlogComponent,
    DetailComponent,
    ArticlesComponent,
  ],
  exports: [
    BlogComponent
  ]
})
export class BlogModule { }
