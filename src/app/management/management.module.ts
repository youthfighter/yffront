import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routes';
import { ManagementComponent } from './management.component';
import { EditorComponent } from './share/editor/editor.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes),
    InputTextModule,
    ButtonModule,
    FormsModule
  ],
  declarations: [
    ManagementComponent,
    EditorComponent,
    LoginComponent
  ],
  exports: [
  ]
})
export class ManagementModule { }
