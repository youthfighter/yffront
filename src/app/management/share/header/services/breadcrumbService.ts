import { MenuItem } from 'primeng/api';
import { element } from 'protractor';

export class BreadcrumbService{
    getMenuItem(path):MenuItem[] {
        if (path === '/management/article') {
            return [
                { label: '内容管理' },
                { label: '新增文章' }
            ]
        } else if (path === '/management/articles') {
            return [
                { label: '内容管理' },
                { label: '文章列表' }
            ]
        } else if (path.indexOf('/management/article/') > -1) {
            return [
                { label: '内容管理' },
                { label: '编辑文章' }
            ]
        } else if (path === '/management/password') {
            return [
                { label: '密码修改' }
            ]
        }
    }
}