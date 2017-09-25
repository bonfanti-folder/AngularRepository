import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutModule} from "./about/about.module";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AboutModule, LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
