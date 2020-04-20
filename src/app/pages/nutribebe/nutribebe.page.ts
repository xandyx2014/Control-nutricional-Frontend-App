import { Component, OnInit } from '@angular/core';
import Viewer from 'viewerjs';
@Component({
  selector: 'app-nutribebe',
  templateUrl: './nutribebe.page.html',
  styleUrls: ['./nutribebe.page.scss'],
})
export class NutribebePage implements OnInit {
  viewer: Viewer;
  constructor() {
   }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.viewer = new Viewer(document.getElementById('images'), {
    });
  }
  mostrarImagen() {
    this.viewer.show();
  }
}
