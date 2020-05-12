import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/home/folder.module').then( m => m.FolderPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canLoad: []
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'calculo',
    loadChildren: () => import('./pages/calculo/calculo.module').then( m => m.CalculoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'nutricional/:id',
    loadChildren: () => import('./pages/nutricional/nutricional.module').then( m => m.NutricionalPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'calculo-nutricional',
    loadChildren: () => import('./pages/calculo-nutricional/calculo-nutricional.module').then( m => m.CalculoNutricionalPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'pai',
    loadChildren: () => import('./pages/pai/pai.module').then( m => m.PaiPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'grafico/:id',
    loadChildren: () => import('./pages/grafico/grafico.module').then( m => m.GraficoPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'nutribebe',
    loadChildren: () => import('./pages/nutribebe/nutribebe.module').then( m => m.NutribebePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'alergia/:id',
    loadChildren: () => import('./pages/alergia/alergia.module').then( m => m.AlergiaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'antecedente/:id',
    loadChildren: () => import('./pages/antecedente/antecedente.module').then( m => m.AntecedentePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'antecedentePatologico/:id',
    loadChildren: () => import('./pages/antecedente-patologico/antecedente-patologico.module').then(
      m => m.AntecedentePatologicoPageModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'anticonceptivo/:id',
    loadChildren: () => import('./pages/anticonceptivo/anticonceptivo.module').then(
      m => m.AnticonceptivoPageModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'embarazo/:id',
    loadChildren: () => import('./pages/embarazo/embarazo.module').then(
      m => m.EmbarazoModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'factorRiesgo/:id',
    loadChildren: () => import('./pages/factor-riesgo/factor-riesgo.module').then(
      m => m.FactorRiesgoModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'factorRiesgoSocial/:id',
    loadChildren: () => import('./pages/factor-riesgo-social/factor-riesgo-social.module').then(
      m => m.FactorRiesgoSocialModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'identificacion/:id',
    loadChildren: () => import('./pages/identificacion/identificacion.module').then(
      m => m.IdentificacionModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'medicamentoEnfermedad/:id',
    loadChildren: () => import('./pages/medicamento-enfermedad/medicamento-enfermedad.module').then(
      m => m.MedicamentoEnfermedadModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'observacion/:id',
    loadChildren: () => import('./pages/observacion/observacion.module').then(
      m => m.ObservacionModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'pap/:id',
    loadChildren: () => import('./pages/pap/pap.module').then(
      m => m.PapModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'riesgo/:id',
    loadChildren: () => import('./pages/riesgo/riesgo.module').then(
      m => m.RiesgoModule
    ),
    canLoad: [AuthGuard]
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
