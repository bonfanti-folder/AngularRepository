import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule} from "@angular/router";
import {LoginRoutingModule} from "./login.routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule, RouterModule, LoginRoutingModule, FormsModule
  ],
  declarations: [LoginComponent],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
