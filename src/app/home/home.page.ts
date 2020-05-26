import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slides: any[] = [];

  constructor(private nav: NavController) {
    this.slides = [
      {
        src: '/assets/gym4.jpg',
        text: 'View Workout Plan',
        link: 'workout'
      },
      {
        src: '/assets/gym.jpg',
        text: 'Check Ammenities',
        link: 'ammenities'
      },
      {
        src: '/assets/gym5.png',
        text: 'Checkout Offers',
        link: 'offers'
      }
    ];
  }


  goTo(link) {
    this.nav.navigateForward(link);
  }
}
