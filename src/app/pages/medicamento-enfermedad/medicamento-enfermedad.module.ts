import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MedicamentoEnfermedadRoutingModule } from './medicamento-enfermedad-routing.module';
import { MedicamentoEnfermedadPage } from './medicamento-enfermedad.page';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MedicamentoEnfermedadRoutingModule
  ],
  declarations: [MedicamentoEnfermedadPage, FormComponent],
  entryComponents: [ FormComponent ]
})
export class MedicamentoEnfermedadModule {}
