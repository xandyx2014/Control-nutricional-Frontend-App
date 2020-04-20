import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutribebePage } from './nutribebe.page';

const routes: Routes = [
  {
    path: '',
    component: NutribebePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutribebePageRoutingModule {}
