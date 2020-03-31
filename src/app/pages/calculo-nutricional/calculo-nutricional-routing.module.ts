import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculoNutricionalPage } from './calculo-nutricional.page';

const routes: Routes = [
  {
    path: '',
    component: CalculoNutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculoNutricionalPageRoutingModule {}
