import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }
  login() {
    console.log('error');
    this.error = '用户名密码错误!!'
  }
  checkInfo() {
    if (this.username && this.password && this.code) {
      return false;
    } else {
      return true;
    }
  }
  keydown(event) {
    if (event.code === 'Enter' && !this.checkInfo()) {
      this.login();
    }
  }
}
