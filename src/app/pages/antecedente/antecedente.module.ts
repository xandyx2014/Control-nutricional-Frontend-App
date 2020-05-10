import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntecedentePageRoutingModule } from './antecedente-routing.module';

import { AntecedentePage } from './antecedente.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AntecedentePageRoutingModule
  ],
  declarations: [AntecedentePage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class AntecedentePageModule {}
