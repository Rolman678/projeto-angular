import { Component } from '@angular/core';
import { produto } from '../../models/produto.model';
import { Router } from '@angular/router';
import { ProdutoService } from '../../produto';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-cadastro-produto',
  styleUrl: './cadastro-produto.css',
  templateUrl: './cadastro-produto.html',
})
export class CadastroProduto {
  public produto: produto = new produto(0, '', '', '', 0);

  constructor(
    private _produtoService: ProdutoService,
    private _router: Router,
  ) {}

  cadastrar(): void {
    this._produtoService.cadastrarProduto(this.produto).subscribe({
      next: (res) => {
        this.produto = new produto(0, '', '', '', 0);
        alert('Cadastro efetuado com sucesso');

        this._router.navigate(['restrito/lista']);
      },
      error: (err) => {
        console.error('Erro:', err);
        alert('Erro ao cadastrar');
      },
    });
  }
}
