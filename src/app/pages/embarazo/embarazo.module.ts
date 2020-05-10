import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbarazoRoutingModule } from './embarazo-routing.module';

import { EmbarazoPage } from './embarazo.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EmbarazoRoutingModule
  ],
  declarations: [EmbarazoPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class EmbarazoModule {}
