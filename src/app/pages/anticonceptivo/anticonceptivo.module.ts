import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntecedentePageRoutingModule } from './anticonceptivo-routing.module';

import { AnticonceptivoPage } from './anticonceptivo.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AntecedentePageRoutingModule
  ],
  declarations: [AnticonceptivoPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class AnticonceptivoPageModule {}
