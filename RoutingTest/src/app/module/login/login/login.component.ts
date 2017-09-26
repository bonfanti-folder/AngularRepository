import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario;
  recordado;
  saludo;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.saludo = this.usuario ? "Hola " + this.usuario : "";
  }

  salir() {
    this.router.navigate(['/']);
  }
}
