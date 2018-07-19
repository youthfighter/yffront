import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css']
})
export class TimeLineComponent implements OnInit {

  articles: any;
  constructor() { }

  ngOnInit() {
    this.articles = [
      { title: '浏览器缓存', content: '哈哈哈哈哈哈', createDate: Date.now(), id: '1'},
      { title: '浏览器缓存', content: '哈哈哈哈哈哈', createDate: Date.now(), id: '2'},
      { title: '浏览器缓存', content: '哈哈哈哈哈哈', createDate: Date.now(), id: '3'},
      { title: '浏览器缓存', content: '哈哈哈哈哈哈', createDate: Date.now(), id: '4'}
    ]
  }

}
