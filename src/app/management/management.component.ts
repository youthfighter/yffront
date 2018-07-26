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

  constructor(private userService: UserService, private router: Router) { }

  async ngOnInit() {
    console.log(await this.userService.checkLogin());
    if (!await this.userService.checkLogin()) {
      //用户没有登录了
      this.router.navigateByUrl('/management/login')
    }
  }

}
