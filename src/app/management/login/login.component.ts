import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../share/header/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string;
  username: string = '';
  password: string = '';
  code: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }
  async login() {
/*     console.log('error');
    this.error = '用户名密码错误!!' */
    console.log('login')
    let result = await this.userService.login(this.username, this.password, this.code);
    if (result) {
      this.router.navigateByUrl('/management');
    } else {
      this.error = '登录失败，请刷新重试!';
    }
  }
  canLogin() {
    return !(this.username && this.password && this.code);
  }
  keydown(event) {
    if (event.code === 'Enter' && !this.canLogin()) {
      this.login();
    }
  }
}
