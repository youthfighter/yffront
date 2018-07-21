import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotListComponent } from './hot-list/hot-list.component';
import { RouterModule } from '@angular/router';
import { TagsComponent } from './tags/tags.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule
  ],
  declarations: [
    HotListComponent,
    TagsComponent
  ],
  exports: [
    HotListComponent,
    TagsComponent
  ]
})
export class ShareModule { }
