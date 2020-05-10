import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slideOpts =   {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.authService.logout();
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

}
