import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./pages/home/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'formulario',
    loadChildren: () => import('./pages/formulario/formulario.module').then( m => m.FormularioPageModule)
  },
  {
    path: 'pacientes',
    loadChildren: () => import('./pages/pacientes/pacientes.module').then( m => m.PacientesPageModule)
  },
  {
    path: 'calculo',
    loadChildren: () => import('./pages/calculo/calculo.module').then( m => m.CalculoPageModule)
  },
  {
    path: 'nutricional',
    loadChildren: () => import('./pages/nutricional/nutricional.module').then( m => m.NutricionalPageModule)
  },
  {
    path: 'calculo-nutricional',
    loadChildren: () => import('./pages/calculo-nutricional/calculo-nutricional.module').then( m => m.CalculoNutricionalPageModule)
  },
  {
    path: 'pai',
    loadChildren: () => import('./pages/pai/pai.module').then( m => m.PaiPageModule)
  },
  {
    path: 'grafico',
    loadChildren: () => import('./pages/grafico/grafico.module').then( m => m.GraficoPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'nutribebe',
    loadChildren: () => import('./pages/nutribebe/nutribebe.module').then( m => m.NutribebePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
