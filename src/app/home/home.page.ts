import { Component,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ImageArray: any = [];

  constructor(private router: Router) {
    this.ImageArray = [{'image' : '/assets/gym.jpg'},{'image' : '/assets/gym.jpg'},{'image' : '/assets/gym.jpg'}]
  }
  checkAmmenities(){
    console.log('triggered')
    this.router.navigate(['/ammenities']);
  }
}
