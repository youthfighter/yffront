import { User } from "../../../../models/user";
import { Router } from "@angular/router";

export class UserService{
    private user: User;
    isLogin: boolean;
    constructor(private router: Router) {

    }
    get() {
        //查看cookies中是否有isLogin标签来判断是否登录。
/*         let arr,reg = new RegExp("(^| )isLogin=([^;]*)(;|$)");
        if(arr = document.cookie.match(reg))
        return !!unescape(arr[2]); */

        //根据内存中是否有user来判断路由。
        return !!this.user;
    }
    hasRole(roleName: string) {
        return this.user && this.user.roles.indexOf(roleName) > -1
    }
    //登录
    login(username: string, password: string, code: string) {
        //登录方法 登录成功后将基本信息放入user变量
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                this.user = new User();
                this.user.id = '1';
                this.user.name = 'admin';
                this.user.roles = ['admin'];
                localStorage.setItem('isLogin', '1');
                resolve(true);
            }, 1000)
        });
    }
    //登出
    logout() {
        //置空user
        this.user = new User();
        this.router.navigateByUrl('/management/login');
    }
    //检测登录状态
    async checkLogin() {
        //登录检测方法
        return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(localStorage.getItem('isLogin') === '1');
            }, 1000);
        })
    }
}