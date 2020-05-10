import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RiesgoRoutingModule } from './riesgo-routing.module';

import { RiesgoPage } from './riesgo.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RiesgoRoutingModule
  ],
  declarations: [RiesgoPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class RiesgoModule {}
