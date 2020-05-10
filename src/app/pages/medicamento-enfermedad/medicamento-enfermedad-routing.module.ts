import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicamentoEnfermedadPage } from './medicamento-enfermedad.page';

const routes: Routes = [
  {
    path: '',
    component: MedicamentoEnfermedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicamentoEnfermedadRoutingModule {}
