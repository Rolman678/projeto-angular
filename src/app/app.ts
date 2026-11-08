import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

/*Importação Angular button*/
import { MatButtonModule } from '@angular/material/button';

/*Importação Angular card*/
import { MatCardModule } from '@angular/material/card';

/*Importação Angular form-field*/
import { MatFormFieldModule } from '@angular/material/form-field';

/*Importação Angular grid-list */
import { MatGridListModule } from '@angular/material/grid-list';

/*Importação  Angular icon*/
import { MatIconModule } from '@angular/material/icon';

/*Importação Angular input*/
import { MatInputModule } from '@angular/material/input';

/*Importação Angular menu */
import { MatMenuModule } from '@angular/material/menu';

/*Importação Angular toolbar */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MenuComponent } from './menu/menu';
import { Rodape } from './rodape/rodape';
import { RestritoRoutesModule } from './restrito/restrito-routes';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { LoginService } from './login';

@Component({
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule,
    MenuComponent,
    Rodape,
    RestritoRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly title = signal('projeto-angular');
  mostrarMenu: boolean = true;

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {
    this._loginService.getMostraMenu().subscribe((res) => {
      this.mostrarMenu = res;
    });
  }

  ngOnDestroy() {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear();
    }
  }
}
