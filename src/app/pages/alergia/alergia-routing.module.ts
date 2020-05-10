import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlergiaPage } from './alergia.page';

const routes: Routes = [
  {
    path: '',
    component: AlergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlergiaPageRoutingModule {}
