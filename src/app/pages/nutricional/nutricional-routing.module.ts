import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricionalPage } from './nutricional.page';

const routes: Routes = [
  {
    path: '',
    component: NutricionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricionalPageRoutingModule {}
