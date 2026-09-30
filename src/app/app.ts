import { Component, signal } from '@angular/core';
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
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  imports: [RouterOutlet, MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatMenuModule, MatToolbarModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projeto-angular');
}
