import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { managementRoutes } from './management.routes';
import { ManagementComponent } from './management.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HomeModule } from 'src/app/management/home/home.module';
import { UserService } from './share/header/services/user.service';
import { UnsaveGuard } from './guard/unsave.guard';
import { LoginGuard, CantLoginGuard } from './guard/loginGuard.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(managementRoutes),
    InputTextModule,
    ButtonModule,
    FormsModule,
    HomeModule
  ],
  declarations: [
    ManagementComponent,
    LoginComponent,
  ],
  exports: [
  ],
  providers: [
    UserService,
    UnsaveGuard,
    LoginGuard,
    CantLoginGuard
  ]
})
export class ManagementModule { }
