import { Component } from '@angular/core';
import {Empresa} from "./modelo/empresa";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empresa = new Empresa("Folder IT", "Somos nuestra gente", ["Valor 1", "Valor 2", "Valor 3"]);
}
