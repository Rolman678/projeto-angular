import { Component, OnInit, signal } from '@angular/core';
import { produto } from '../../models/produto.model';
import { ProdutoService } from '../../produto';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, FormsModule],
  selector: 'app-atualiza-produto',
  styleUrl: './atualiza-produto.css',
  templateUrl: './atualiza-produto.html',
})
export class AtualizaProduto implements OnInit {
  public produto: produto = new produto(0, '', '', '', 0);
  public carregado = signal(false);

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const id = this._activatedRoute.snapshot.paramMap.get('id');

    this._produtoService.getProduto(id).subscribe((res: any) => {
      const dados = Array.isArray(res) ? res[0] : res;
      this.produto = new produto(dados.id, dados.produto, dados.descricao, dados.foto, dados.preco);
      this.carregado.set(true);
    });
  }

  atualizar(id: any) {
    this._produtoService.atualizaProduto(id, this.produto).subscribe({
      next: () => this._router.navigate(['restrito/lista']),
      error: () => alert('Erro ao atualizar'),
    });
  }
}
