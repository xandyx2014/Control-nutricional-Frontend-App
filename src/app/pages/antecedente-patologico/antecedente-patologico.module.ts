import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntecedentePageRoutingModule } from './antecedente-routing.module';

import { AntecedentePatologicoPage } from './antecedente-patologico.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AntecedentePageRoutingModule
  ],
  declarations: [AntecedentePatologicoPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class AntecedentePatologicoPageModule {}
