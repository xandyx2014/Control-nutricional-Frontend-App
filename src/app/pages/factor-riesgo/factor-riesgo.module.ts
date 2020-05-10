import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorRiesgoRoutingModule } from './factor-riesgo-routing.module';

import { FactorRiesgoPage } from './factor-riesgo.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FactorRiesgoRoutingModule
  ],
  declarations: [FactorRiesgoPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class FactorRiesgoModule {}
