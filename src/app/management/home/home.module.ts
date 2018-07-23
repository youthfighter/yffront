import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/management/home/home.component';
import { homeConfig } from 'src/app/management/home/home.routes';
import { ArticlesListComponent } from 'src/app/management/home/articles-list/articles-list.component';
import { MenusComponent } from 'src/app/management/share/menus/menus.component';
import { EditorComponent } from 'src/app/management/share/editor/editor.component';
import { HeaderComponent } from 'src/app/management/share/header/header.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbModule,
    OverlayPanelModule,
    ButtonModule,
    TableModule,
    PaginatorModule,
    ConfirmDialogModule
  ],
  declarations: [
    HomeComponent,
    ArticlesListComponent,
    MenusComponent,
    EditorComponent,
    HeaderComponent,
  ],
  providers: [
    ConfirmationService
  ]
})
export class HomeModule { }
