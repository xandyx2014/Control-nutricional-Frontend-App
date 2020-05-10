import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservacionRoutingModule } from './observacion-routing.module';

import { ObservacionPage } from './observacion.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ObservacionRoutingModule
  ],
  declarations: [ObservacionPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class ObservacionModule {}
