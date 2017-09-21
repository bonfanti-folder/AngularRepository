import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { ApiService } from './service/api.service';
import { ApplicationService } from './service/aplication.service';
import { Store } from './service/store';
import { StoreService } from './service/store.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    RouterModule
  ],
  providers: [ApiService, ApplicationService, Store, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  