import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteBooksComponent } from 'src/app/blog/index/favorite-books/favorite-books.component';
import { IndexComponent } from 'src/app/blog/index/index.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [
    IndexComponent,
    FavoriteBooksComponent,
    TimeLineComponent
  ],
  exports: [
    IndexComponent,
    FavoriteBooksComponent
  ]
})
export class IndexModule { }
