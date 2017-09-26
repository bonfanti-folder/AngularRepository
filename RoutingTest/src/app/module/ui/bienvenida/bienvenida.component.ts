import {Component, OnInit} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";
import {Empresa} from "../../../modelo/empresa";

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {
  usuario = {nombre: "Emiliano"};
  empresa: Empresa = {
    nombre: "Hola",
    lema: "Hola",
    valores: [],
  };

  constructor(private service: EmpresaService) {
  }

  ngOnInit() {
    this.service.getEmpresa().then(empresa => this.empresa = empresa);
  }

}
