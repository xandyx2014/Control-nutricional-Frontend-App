import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaiPageRoutingModule } from './pai-routing.module';

import { PaiPage } from './pai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaiPageRoutingModule
  ],
  declarations: [PaiPage]
})
export class PaiPageModule {}
