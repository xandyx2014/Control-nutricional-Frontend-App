import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlergiaPageRoutingModule } from './alergia-routing.module';

import { AlergiaPage } from './alergia.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AlergiaPageRoutingModule
  ],
  declarations: [AlergiaPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class AlergiaPageModule {}
