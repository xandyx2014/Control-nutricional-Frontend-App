import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculoNutricionalPageRoutingModule } from './calculo-nutricional-routing.module';

import { CalculoNutricionalPage } from './calculo-nutricional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculoNutricionalPageRoutingModule
  ],
  declarations: [CalculoNutricionalPage]
})
export class CalculoNutricionalPageModule {}
