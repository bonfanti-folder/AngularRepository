import {Component, OnInit} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css'],
})
export class HomeEmpresaComponent implements OnInit {

  empresa;
  valorSeleccionado;

  constructor(private service: EmpresaService) {
  }

  ngOnInit() {
    this.service.getEmpresa().then(empresa => this.empresa = empresa);
  }

  seleccionarValor(valor) {
    this.valorSeleccionado = valor;
  }
}
