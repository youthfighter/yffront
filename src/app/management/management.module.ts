import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routes';
import { ManagementComponent } from './management.component';
import { EditorComponent } from './share/editor/editor.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes)
  ],
  declarations: [
    ManagementComponent,
    EditorComponent
  ],
  exports: [
  ]
})
export class ManagementModule { }
