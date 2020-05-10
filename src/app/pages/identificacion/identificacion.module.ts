import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdentificacionRoutingModule } from './identificacion-routing.module';

import { IdentificacionPage } from './identificacion.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    IdentificacionRoutingModule
  ],
  declarations: [IdentificacionPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class IdentificacionModule {}
