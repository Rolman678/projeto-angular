import { Component, OnInit } from '@angular/core';
import { produto } from '../models/produto.model';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProdutoService } from '../produto';
import { NgFor, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [MatCardModule, MatGridListModule, NgFor, CurrencyPipe],
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class InicioComponent implements OnInit {
  public produtos: produto[] = [];

  constructor(private _produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos = retornaProduto.map(
        (item) => new produto(item.id, item.produto, item.descricao, item.foto, item.preco),
      );
    });
  }
}
