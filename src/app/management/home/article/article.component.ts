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
  article: Article = new Article();
  pageTitle: string = '新增文章';
  private mask: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
    console.log(this.activatedRoute)
    if (this.activatedRoute.snapshot.params.id) {
      this.pageTitle = '编辑文章';
      this.mask = true;
    }
  }
  markdownChange(data) {
    console.log('markdownChange', arguments);
  }
  save() {
    console.log(this.editormd.getData())
  }
}
