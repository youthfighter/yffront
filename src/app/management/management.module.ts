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
import { HomeComponent } from './home/home.component';
import { BreadcrumbModule } from 'primeng/breadcrumb'
import { HeaderComponent } from 'src/app/management/share/header/header.component';
import { MenusComponent } from 'src/app/management/share/menus/menus.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes),
    InputTextModule,
    ButtonModule,
    FormsModule,
    BreadcrumbModule,
    OverlayPanelModule
  ],
  declarations: [
    ManagementComponent,
    EditorComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    MenusComponent
  ],
  exports: [
  ]
})
export class ManagementModule { }
