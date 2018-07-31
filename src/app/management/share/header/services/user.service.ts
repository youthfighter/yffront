import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../models/user';
/* import { Http } from '@angular/http'; */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User;
    
    constructor(private router: Router/* , private http: Http */) {

    }
    get isLogin() {
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
        this.user = null;
        //todo 服务器删除对应session;
        this.router.navigateByUrl('/management/login');
    }
    //检测登录状态
    async checkLogin() {
        //登录检测方法
        this.user = await this.getUser();
        if (!this.user) {
            this.router.navigateByUrl('/management/login');
        }
        return this.isLogin;
    }
    //从服务器从新获取用户信息
    async getUser(): Promise<User> {
        return new Promise<User>((resolve,reject) => {
            setTimeout(()=>{
                if (localStorage.getItem('isLogin') === '1') {
                    resolve({
                        id: '1',
                        name: 'admin',
                        roles: ['admin']
                    } as User);
                } else {
                    resolve(null);
                }
            }, 1000)
        })
    }
    //从服务器从新获取用户信息
    async refreshUser(): Promise<boolean> {
        return new Promise<boolean>((resolve,reject) => {
            setTimeout(()=>{
                if (localStorage.getItem('isLogin') === '1') {
                    this.user = { id: '1', name: 'admin', roles: ['admin'] } as User;
                }
                resolve(true);
            }, 1000)
        })

    }
    async getLoginState(): Promise<boolean> {
        if (this.user) return true;
        await this.refreshUser();
        if (this.user) return true
        else return false;
    }
    //修改密码
    async changePassword(oldPwd: string, newPwd: string): Promise<boolean> {
/*         try {
            await this.http.post('/api/v1/user/password', `oldPwd=${oldPwd}&newPwd=${newPwd}`).toPromise();
        } catch(e) {
            return false;
        }
        return true; */
        return Promise.resolve(true);
        
    }
}
