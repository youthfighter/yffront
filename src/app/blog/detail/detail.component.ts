import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  article: any;
  hotList: any[];
  constructor() { }

  ngOnInit() {
    this.article = { id: '1', title:'浏览器缓存', publishDate: Date.now(), tags: ['浏览器', '缓存', 'HTTP'], content:`<div>123</div>` }
    this.hotList = [
      { id: '1', title: '装修简介'},
      { id: '2', title: '装修简介'},
      { id: '3', title: '装修简介'},
    ]
  }

}
