import { Routes } from '@angular/router';

import { InicioComponent } from './inicio/inicio';
import { Login } from './login/login';
import { Restrito } from './restrito/restrito';
import { CadastroProduto } from './restrito/cadastro-produto/cadastro-produto';
import { ListaProduto } from './restrito/lista-produto/lista-produto';
import { AtualizaProduto } from './restrito/atualiza-produto/atualiza-produto';
import { GuardGuard } from './guard-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: Login },
  {
    path: 'restrito',
    component: Restrito,
    canActivate: [GuardGuard],
    children: [
      { path: 'cadastro', component: CadastroProduto },
      { path: 'lista', component: ListaProduto },
      { path: 'editar/:id', component: AtualizaProduto },
      { path: '', redirectTo: 'lista', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'inicio' },
];
