import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { UserService } from './share/header/services/user.service';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  private loading: boolean = true;
  constructor(private userService: UserService, private router: Router) {
    console.log('ManagementComponent');
   }

  async ngOnInit() {
    //console.log('this.userService.isLogin', this.userService.isLogin);
    this.loading = false;
/*     if (!this.userService.isLogin) {
      //用户没有登录了
      await this.userService.checkLogin();
    }
    this.loading = false; */
  }
}
