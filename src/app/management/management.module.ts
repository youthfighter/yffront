import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routes';
import { ManagementComponent } from './management.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes)
  ],
  declarations: [
    ManagementComponent
  ],
  exports: [
  ]
})
export class ManagementModule { }
