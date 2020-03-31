import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GraficoPageRoutingModule } from './grafico-routing.module';

import { GraficoPage } from './grafico.page';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChartsModule,
    GraficoPageRoutingModule
  ],
  declarations: [GraficoPage]
})
export class GraficoPageModule {}
