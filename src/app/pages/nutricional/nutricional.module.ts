import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NutricionalPageRoutingModule } from './nutricional-routing.module';

import { NutricionalPage } from './nutricional.page';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    NutricionalPageRoutingModule
  ],
  declarations: [NutricionalPage, FormularioComponent],
  entryComponents: [FormularioComponent]
})
export class NutricionalPageModule {}
