import { User } from "../../../../models/user";

export class UserService{
    private user: User;
    isLogin: boolean;
    get() {
        return !!this.user 
    }
    hasRole(roleName: string) {
        return this.user && this.user.roles.indexOf(roleName) > -1
    }
    //登录
    login() {

    }
    //登出
    logout() {

    }
    //检测登录状态
    checkLogin() {
        
    }
}