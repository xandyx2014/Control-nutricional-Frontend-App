import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntecedentePage } from './antecedente.page';

const routes: Routes = [
  {
    path: '',
    component: AntecedentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntecedentePageRoutingModule {}
