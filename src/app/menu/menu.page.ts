import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuComponent {

  activePath = '';

  pages = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Gallery',
      path: '/gallery'
    },
    {
      name: 'Contact',
      path: '/contact'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url;
    });
  }
}
