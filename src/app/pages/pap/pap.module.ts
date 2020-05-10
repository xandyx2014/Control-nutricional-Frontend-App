import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PapRoutingModule } from './pap-routing.module';

import { PapPage } from './pap.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PapRoutingModule
  ],
  declarations: [PapPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class PapModule {}
