import { CanActivate } from '@angular/router';
import { UserService } from '../share/header/services/userServices';

export class LoginGuard implements CanActivate {
    constructor(private userService: UserService){ }
    canActivate() {
        return this.userService.isLogin;
    }
}