import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { menusConfig } from './menus.config'

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {
  menus: any[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.menus = menusConfig;
    this.refreshMenus(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        event as NavigationEnd;
        this.refreshMenus(event.url);
      }
    })
  }
  /* 刷新菜单开关 */  
  refreshMenus(path: string) {
    this.menus.forEach(first => {
      if (first.children) {
        first.children.forEach(second => {
          if (second.link === path) {
            first.checked = true;
            second.checked = true;
          } else {
            second.checked = false;
          }
        })
      }
    })
  }
}
