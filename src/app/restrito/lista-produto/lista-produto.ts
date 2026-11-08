import { Component, OnInit, signal } from '@angular/core';
import { produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto';
import { NgForOf, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgForOf, RouterLink, CurrencyPipe],
  selector: 'app-lista-produto',
  styleUrl: './lista-produto.css',
  templateUrl: './lista-produto.html',
})
export class ListaProduto implements OnInit {
  public produtos = signal<produto[]>([]);

  constructor(private _produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarProdutos();
  }

  listarProdutos(): void {
    this._produtoService.getProdutos().subscribe((retornaProduto) => {
      this.produtos.set(retornaProduto);
    });
  }

  excluir(id: number) {
    this._produtoService.removerProduto(id).subscribe({
      next: () => {
        this.listarProdutos();
      },
      error: () => {
        alert('Erro ao Excluir');
      },
    });
  }
}
