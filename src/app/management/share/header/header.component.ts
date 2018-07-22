import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private items: MenuItem[];
  private items2: MenuItem[];
  constructor() { }

  ngOnInit() {
    this.items = [
      {label:'Categories'},
      {label:'Sports'},
      {label:'Football'},
      {label:'Countries'},
      {label:'Spain'},
      {label:'F.C. Barcelona'},
      {label:'Squad'},
      {label:'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi'}
    ];
    this.items2 = [
      {
          label: 'TV', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'TV 1'
                  },
                  {
                      label: 'TV 2'
                  }
              ]
          ]
      }
  ];
  }
}
