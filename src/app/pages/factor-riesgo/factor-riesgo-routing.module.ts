import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorRiesgoPage } from './factor-riesgo.page';

const routes: Routes = [
  {
    path: '',
    component: FactorRiesgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorRiesgoRoutingModule {}
