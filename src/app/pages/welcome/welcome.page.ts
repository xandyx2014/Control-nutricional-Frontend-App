import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import Viewer from 'viewerjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  slideOpts = {
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  viewer: Viewer;
  constructor(
    private menuCtrl: MenuController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.authService.logout();
    this.viewer = new Viewer(document.getElementById('images'), {
    });
  }
  mostrarImagen() {
    console.log('hi');
    this.viewer.show();
  }
  ionViewDidEnter() {
    this.menuCtrl.enable(false);
  }

}
