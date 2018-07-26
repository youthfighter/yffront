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
    login(username: string, password: string, code: string) {
        setTimeout(()=>{
            this.user = new User();
            this.user.id = '1';
            this.user.name = 'admin';
            this.user.roles = ['admin'];
        }, 1000)
    }
    //登出
    logout() {

    }
    //检测登录状态
    async checkLogin() {
        return  new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(false);
            }, 1000);
        })
    }
}