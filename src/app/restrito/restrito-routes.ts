import { RouterModule, Routes } from '@angular/router';
import { CadastroProduto } from './cadastro-produto/cadastro-produto';
import { ListaProduto } from './lista-produto/lista-produto';
import { AtualizaProduto } from './atualiza-produto/atualiza-produto';
import { Restrito } from './restrito';
import { NgModule } from '@angular/core';
import { GuardGuard } from '../guard-guard';

const restritoRoutes: Routes = [
  {
    path: 'restrito',
    component: Restrito,
    children: [
      { path: 'cadastro', component: CadastroProduto, canActivate: [GuardGuard] },
      { path: 'lista', component: ListaProduto, canActivate: [GuardGuard] },
      { path: 'editar/:id', component: AtualizaProduto, canActivate: [GuardGuard] },
    ],
  },

  { path: '', redirectTo: '/restrito/lista', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(restritoRoutes)],
  exports: [RouterModule],
})
export class RestritoRoutesModule {}
