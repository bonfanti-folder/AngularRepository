import {Component, OnInit} from '@angular/core';
import {EmpresaService} from "../../../service/empresa.service";

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css'],
})
export class HomeEmpresaComponent implements OnInit {

  empresa;

  constructor(private service: EmpresaService) {
  }

  ngOnInit() {
    this.service.getEmpresa().then(empresa => this.empresa = empresa);
  }

  eliminarValor(index) {
    this.empresa.valores.splice(index, 1);
  }

  agregarValor(valor) {
    this.empresa.valores.push(valor);
  }

}
