import { Component, OnInit } from '@angular/core';
import { UserService } from '../share/header/services/userServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /* private isLogin: boolean; */
  constructor(private userService: UserService, private router: Router) {
    /* this.isLogin = userService.isLogin; */
   }

  async ngOnInit() {
/*     console.log(!this.isLogin, !await this.userService.checkLogin())
    if (!this.isLogin && !await this.userService.checkLogin()) {
      //用户没有登录了
      console.log('用户没有登录了')
      this.router.navigateByUrl('/management/login')
    } else {
      this.isLogin = true;
    } */
  }

}
