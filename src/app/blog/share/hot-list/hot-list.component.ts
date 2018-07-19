import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hot-list',
  templateUrl: './hot-list.component.html',
  styleUrls: ['./hot-list.component.css']
})
export class HotListComponent implements OnInit {

  @Input('title')
  title: string;
  @Input('list')
  list: { content: string, link: string }[]
  constructor() { }

  ngOnInit() {
  }

}
