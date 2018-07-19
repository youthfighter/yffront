import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from 'src/app/app.routes';
import { BlogModule } from 'src/app/blog/blog.module';

@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
