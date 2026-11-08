import { Component } from '@angular/core';
import { MenuRestrito } from './menu-restrito/menu-restrito';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [MenuRestrito, RouterOutlet],
  selector: 'app-restrito',
  styleUrl: './restrito.css',
  templateUrl: './restrito.html',
})
export class Restrito {}
