import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'app-teste-boostrap',
  imports: [MatButton, MatTooltip],
  templateUrl: './teste-boostrap.component.html',
  styleUrl: './teste-boostrap.component.css'
})
export class TesteBoostrapComponent {

}
