import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: any[];
  curSelected: any;
  constructor() { }

  ngOnInit() {
    this.menus = [
      { label: '内容管理', 
        children: [
          { label: '文章管理', link: '/management/article' },
          { label: '留言管理', link: '/management/articles' }
        ]
      },
      { label: '内容管理', 
      children: [
        { label: '文章管理', link: '/management/article/1' },
        { label: '留言管理', link: '/management/article/2' }
      ]
    }
    ]
  }
  firstClick(ele) {
    ele.checked = !ele.checked;
  }
  secondClick(event: Event, ele) {
    event.stopPropagation();
    if (this.curSelected) {
      this.curSelected.checked = false;
    }
    this.curSelected = ele;
    ele.checked = true;
    
  }

}
