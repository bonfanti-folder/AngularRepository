import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {EmpresaService} from "./service/empresa.service";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app.routing.module";
import {HttpModule} from "@angular/http";
import {UIModule} from "./module/ui/ui.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, RouterModule, AppRoutingModule, HttpModule, UIModule
  ],
  providers: [EmpresaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
