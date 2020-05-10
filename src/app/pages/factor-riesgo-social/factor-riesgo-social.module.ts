import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactorRiesgoSocialRoutingModule } from './factor-riesgo-social-routing.module';

import { FactorRiesgoSocialPage } from './factor-riesgo-social.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FactorRiesgoSocialRoutingModule
  ],
  declarations: [FactorRiesgoSocialPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class FactorRiesgoSocialModule {}
