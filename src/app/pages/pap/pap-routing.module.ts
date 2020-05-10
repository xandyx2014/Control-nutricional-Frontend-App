import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PapPage } from './pap.page';

const routes: Routes = [
  {
    path: '',
    component: PapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PapRoutingModule {}
