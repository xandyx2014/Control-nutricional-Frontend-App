import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  direccion: any = [-63.1809485, -17.8288405];
  constructor() { }

  ngOnInit() {
    // or "const mapboxgl = require('mapbox-gl');"
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: this.direccion,
      zoom: 12,
      accessToken: 'pk.eyJ1IjoieGFuZHl4MjAxNCIsImEiOiJjangxeGFyN20wMGdkM3l1cmR5b2JxOTBrIn0.Ukkn6EsM_FS50Utt56wlwQ'
    });
    const marker = new mapboxgl.Marker()
      .setLngLat(this.direccion)
      .addTo(map);
  }

}
