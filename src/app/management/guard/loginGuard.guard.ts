import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../share/header/services/user.service';
import { Injectable } from '@angular/core';
@Injectable()
export class LoginGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router){ }
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let res = await this.userService.getLoginState();
        console.log('guard', res);
        if (!res) {
            this.router.navigateByUrl('/management/login');
        } else {
            return true;
        }
    }
}

@Injectable()
export class CantLoginGuard implements CanActivate {
    constructor(private userService: UserService, private router: Router){ }
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let res = await this.userService.getLoginState();
        console.log('guard', res);
        if (res) {
            this.router.navigateByUrl('/management');
        } else {
            return true;
        }
    }
}