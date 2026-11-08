import { Component, OnInit, OnDestroy, afterNextRender } from '@angular/core';
import { produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto';
import { NgForOf } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { filter, Subscription } from 'rxjs';
import { LoginService } from '../../login';

@Component({
  imports: [NgForOf, RouterLink, CurrencyPipe],
  selector: 'app-lista-produto',
  styleUrl: './lista-produto.css',
  templateUrl: './lista-produto.html',
})
export class ListaProduto implements OnInit, OnDestroy {
  public produtos: any[] = [];
  private routerSubscription!: Subscription;

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _loginService: LoginService,
  ) {
    afterNextRender(() => {
      this.listarProdutos();
    });
  }

  ngOnInit(): void {
    this._loginService.setMostraMenu(false);

    this.routerSubscription = this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.listarProdutos();
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto: any) => {
      console.log('Produtos carregados com sucesso:', retornaProduto);
      this.produtos = retornaProduto;
    });
  }

  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe({
      next: () => {
        this.listarProdutos();
      },
      error: (err) => {
        alert('Erro ao Excluir');
      },
    });
  }
}
