import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactorRiesgoSocialPage } from './factor-riesgo-social.page';

const routes: Routes = [
  {
    path: '',
    component: FactorRiesgoSocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactorRiesgoSocialRoutingModule {}
