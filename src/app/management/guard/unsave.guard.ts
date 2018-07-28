import { CanDeactivate } from '@angular/router';
import { ArticleComponent } from '../../blog/detail/article/article.component';
import { Injectable } from '@angular/core';
@Injectable()
export class UnsaveGuard implements CanDeactivate<ArticleComponent> {
    canDeactivate(component: ArticleComponent): boolean {
        console.log('1111');
        alert('您有未保存的内容，确认离开？')
        return true;
    }
}