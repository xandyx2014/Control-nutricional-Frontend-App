import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculo-nutricional',
  templateUrl: './calculo-nutricional.page.html',
  styleUrls: ['./calculo-nutricional.page.scss'],
})
export class CalculoNutricionalPage implements OnInit {
  ok = false;
  descripcion = '';
  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( ({fechaInicial, fechaSiguiente, descripcion}) => {
      flatpickr('#myID', {
        defaultDate: fechaInicial,
        inline: true,
        locale: Spanish
      });
      flatpickr('#myID2', {
        defaultDate: fechaSiguiente,
        inline: true,
        locale: Spanish
      });
      this.descripcion = descripcion;
      this.ok = true;
    });
  }
  onChange($event) {
    console.log($event);
  }
}
