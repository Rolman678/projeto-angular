import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html', // Corregido: apunta a tu archivo HTML
  styleUrl: './menu.css',     // Corregido: apunta a tu archivo CSS
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
})
export class MenuComponent {}