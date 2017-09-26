import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeEmpresaComponent} from "./home-empresa/home-empresa.component";
import {AboutComponent} from './about/about.component';
import {RouterModule} from "@angular/router";
import {EmpresaService} from "../../service/empresa.service";
import {BienvenidaComponent} from "./bienvenida/bienvenida.component";
import {HttpModule} from "@angular/http";
import {UIRoutingModule} from "./ui.routing.module";

@NgModule({
  declarations: [
    HomeEmpresaComponent,
    BienvenidaComponent,
    AboutComponent
  ],
  imports: [
    CommonModule, HttpModule, RouterModule, UIRoutingModule
  ],
  bootstrap: [
    HomeEmpresaComponent
  ],
  providers: [EmpresaService]
})
export class UIModule {
}
