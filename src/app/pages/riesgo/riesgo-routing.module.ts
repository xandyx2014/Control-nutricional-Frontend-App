import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RiesgoPage } from './riesgo.page';

const routes: Routes = [
  {
    path: '',
    component: RiesgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RiesgoRoutingModule {}
