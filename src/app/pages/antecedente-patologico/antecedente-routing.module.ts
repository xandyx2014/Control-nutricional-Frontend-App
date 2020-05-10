import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntecedentePatologicoPage } from './antecedente-patologico.page';

const routes: Routes = [
  {
    path: '',
    component: AntecedentePatologicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntecedentePageRoutingModule {}
