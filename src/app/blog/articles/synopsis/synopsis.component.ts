import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.css']
})
export class SynopsisComponent implements OnInit {
  @Input('article')
  article: any;
  constructor() { }

  ngOnInit() {
  }

}
