import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricionalPageRoutingModule } from './nutricional-routing.module';

import { NutricionalPage } from './nutricional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NutricionalPageRoutingModule
  ],
  declarations: [NutricionalPage]
})
export class NutricionalPageModule {}
