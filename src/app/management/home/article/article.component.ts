import { Component, OnInit, ViewChild } from '@angular/core';
import { EditorComponent } from '../../share/editor/editor.component';
import { Article } from '../../../models/article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @ViewChild(EditorComponent)
  editormd: EditorComponent;
  article: Article;
  pageTitle: string = '新增文章';

  constructor(private activatedRoute: ActivatedRoute) { 
    if (this.activatedRoute.snapshot.params.id) {
      this.pageTitle = '编辑文章'
    } else {
      this.article = new Article();
    }
  }

  ngOnInit() {
    if (this.pageTitle === '编辑文章') {
      
    }
  }
  markdownChange(data) {
    console.log('markdownChange', arguments);
  }
  save() {
    console.log(this.editormd.getData())
  }
}
