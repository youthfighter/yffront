import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ArticlesComponent } from './articles.component';
import { SynopsisComponent } from './synopsis/synopsis.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    ArticlesComponent,
    SynopsisComponent
  ]
})
export class ArticlesModule { }
