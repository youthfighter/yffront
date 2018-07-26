import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BreadcrumbService } from './services/breadcrumbService';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavigationStart } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [BreadcrumbService]
})
export class HeaderComponent implements OnInit {
  private items: MenuItem[];
  constructor(private breadcrumbService: BreadcrumbService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = this.breadcrumbService.getMenuItem(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        event as NavigationEnd;
        this.items = this.breadcrumbService.getMenuItem(event.url);
      }
    })
  }
}

