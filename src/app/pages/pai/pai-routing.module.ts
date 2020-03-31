import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaiPage } from './pai.page';

const routes: Routes = [
  {
    path: '',
    component: PaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaiPageRoutingModule {}
