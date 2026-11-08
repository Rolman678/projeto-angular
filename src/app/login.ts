import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  mostraMenu = new Subject<boolean>();
  constructor() {}

  login(usuario: string, senha: string): boolean {
    if (usuario == 'aluno' && senha == '1234') {
      localStorage.setItem('token', 'qwer1234');
      this.mostraMenu.next(false);
      return true;
    } else {
      this.mostraMenu.next(true);
      return false;
    }
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable();
  }
}
