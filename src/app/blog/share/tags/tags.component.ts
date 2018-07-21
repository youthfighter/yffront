import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input('tags')
  tags: any[];
  constructor(private router: Router) { }

  ngOnInit() {
  }
  tagSearch(tag) {
    this.router.navigateByUrl(`/blog/articles?tag=${tag}`);
  }

}
