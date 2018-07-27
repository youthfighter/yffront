import { CanDeactivate } from '@angular/router';
import { ArticleComponent } from '../../blog/detail/article/article.component';

export class UnsaveGuard implements CanDeactivate<ArticleComponent> {
    canDeactivate(component: ArticleComponent): boolean {
        return false;
    }
}