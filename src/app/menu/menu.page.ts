import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  activePath = '';

  pages = [
    {
      name: 'Home',
      path: '/menu/home'
    },
    {
      name: 'Gallery',
      path: '/menu/gallery'
    },
    {
      name: 'Contact',
      path: '/menu/contact'
    }
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.activePath = event.url
    })
  }

  ngOnInit() {
  }
}