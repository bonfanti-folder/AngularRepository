import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeEmpresaComponent} from "./home-empresa/home-empresa.component";
import {AboutComponent} from "./about/about.component";
import {BienvenidaComponent} from "./bienvenida/bienvenida.component";

const routes: Routes = [
  {
    path: 'empresa',
    component: HomeEmpresaComponent,
    pathMatch: 'full'
  },
  {path: 'about', component: AboutComponent},
  {path: 'welcome', component: BienvenidaComponent},
  {path: 'login', loadChildren: '../login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule {
}
