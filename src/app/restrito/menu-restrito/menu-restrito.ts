import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../../login';

@Component({
  imports: [MatToolbar, MatToolbarRow, RouterLink],
  selector: 'app-menu-restrito',
  styleUrl: './menu-restrito.css',
  templateUrl: './menu-restrito.html',
})
export class MenuRestrito {
  constructor(
    private _router: Router,
    private _loginService: LoginService,
  ) {}

  logout() {
    localStorage.clear();
    this._loginService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }
}
