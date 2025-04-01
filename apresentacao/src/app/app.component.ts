import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteBoostrapComponent} from './teste-boostrap/teste-boostrap.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TesteBoostrapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apresentacao';
}
