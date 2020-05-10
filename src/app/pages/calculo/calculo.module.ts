import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculoPageRoutingModule } from './calculo-routing.module';

import { CalculoPage } from './calculo.page';
import { EstadoNutricionPipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculoPageRoutingModule,
    EstadoNutricionPipeModule
  ],
  declarations: [CalculoPage]
})
export class CalculoPageModule {}
