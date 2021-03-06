import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles: any[];
  hotList: any[];
  queryObj = {};
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.articles = [
      { id: '1', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
      { id: '2', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
      { id: '3', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
      { id: '4', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
      { id: '5', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
      { id: '6', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:'阅读目录*1.浏览器缓存基本认识*2.强缓存的原理*3.强缓存的管理*4.强缓存的应用*5.协商缓存的原理*6.协商缓存的管理*7.浏览器行为对缓存的影响浏览器缓存，也就是客户端缓存，既是网页性能优化里面静态资源相关优化的一大利器，也是无数web开发人员在工作过程不可避免的一大问题，所以在产品开发的时候我们总是想办法避免缓存产生，而在产品发布之时又在想策略管理缓存提升网页的访问速度。了解浏览器的缓...' },
    ]
    this.hotList = [
      { id: '1', title: '装修简介'},
      { id: '2', title: '装修简介'},
      { id: '3', title: '装修简介'},
    ]
    this.activatedRoute.queryParams.subscribe(queryParams => {
       Object.assign(this.queryObj, queryParams);
       console.log(this.queryObj);
    })
  }
  paginate(event) {
    this.queryObj['page'] = event.page + 1;
    this.router.navigate(['/blog/articles'], { queryParams: this.queryObj });
  }
}
