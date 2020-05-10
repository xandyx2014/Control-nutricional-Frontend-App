import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbarazoPage } from './embarazo.page';

const routes: Routes = [
  {
    path: '',
    component: EmbarazoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbarazoRoutingModule {}
