import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { UserService } from './share/header/services/userServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  private loading: boolean = true;
  constructor(private userService: UserService, private router: Router) {
   }

  async ngOnInit() {
    console.log(!this.userService.isLogin, !await this.userService.checkLogin())
    if (!this.userService.isLogin && !await this.userService.checkLogin()) {
      //用户没有登录了
      this.loading = false;
      this.router.navigateByUrl('/management/login')
    } else {
      this.loading = false;
      if (this.router.url === '/management/login') {
        this.router.navigateByUrl('/management');
      }      
    }
  }

}
