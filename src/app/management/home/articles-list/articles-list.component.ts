import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];
  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.articles = [
      {
        id: '1',
        title: 'angular2学习笔记',
        author: 'youthfighter',
        content: 'string',
        synopsis: 'string',
        htmlContent: 'string',
        createDate: Date.now(),
        publishDate: Date.now(),
        tags: [],
        state: '发布'
      },
      {
        id: '1',
        title: 'angular2学习笔记',
        author: 'youthfighter',
        content: 'string',
        synopsis: 'string',
        htmlContent: 'string',
        createDate: Date.now(),
        publishDate: Date.now(),
        tags: [],
        state: '发布'
      },
      {
        id: '1',
        title: 'angular2学习笔记',
        author: 'youthfighter',
        content: 'string',
        synopsis: 'string',
        htmlContent: 'string',
        createDate: Date.now(),
        publishDate: Date.now(),
        tags: [],
        state: '发布'
      },
      {
        id: '1',
        title: 'angular2学习笔记',
        author: 'youthfighter',
        content: 'string',
        synopsis: 'string',
        htmlContent: 'string',
        createDate: Date.now(),
        publishDate: Date.now(),
        tags: [],
        state: '发布'
      }
    ]
  }
  paginate(num) {
    console.log(num);
  }
  editArticle(id) {
    console.log(id)
  }
  deleteArticle(id) {
    this.confirmationService.confirm({
      message: '确认删除该文章？',
      accept: () => {
        console.log(id);
        }
    });
    
  }
}
