import { Component, OnInit } from '@angular/core';
import { produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, FormsModule, ReactiveFormsModule],
  selector: 'app-atualiza-produto',
  styleUrl: './atualiza-produto.css',
  templateUrl: './atualiza-produto.html',
})
export class AtualizaProduto implements OnInit {
  public produtoId: number = 0;
  public produto: produto = new produto(0, '', '', '', 0);

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.produtoId = Number(params['id']);

      if (this.produtoId) {
        this.listarProduto();
      }
    });
  }

  listarProduto(): void {
    this._produtoService.getProduto(this.produtoId).subscribe((res: any) => {
      const dados = Array.isArray(res) ? res[0] : res;

      this.produto = new produto(dados.id, dados.produto, dados.descricao, dados.foto, dados.preco);
    });
  }

  atualizar(id: number) {
    this._produtoService.atualizaProduto(id, this.produto).subscribe({
      next: (res) => {
        this._router.navigate(['restrito/lista']);
      },
      error: (err) => {
        alert('Error ao atualizar');
      },
    });
  }
}
