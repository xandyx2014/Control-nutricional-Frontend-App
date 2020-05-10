import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnticonceptivoPage } from './anticonceptivo.page';

const routes: Routes = [
  {
    path: '',
    component: AnticonceptivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntecedentePageRoutingModule {}
