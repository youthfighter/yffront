import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DetailComponent,
    ArticleComponent
  ]
})
export class DetailModule { }
