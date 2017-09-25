import { AuthGuard } from './service/guard/auth.guard';
import { AlertService } from './service/alert.service';
import { LoadingService } from './service/loading.service';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


import { ApiService } from './service/api.service';
import { ApplicationService } from './service/aplication.service';
import { Store } from './service/store';
import { StoreService } from './service/store.service';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [ApiService,
              ApplicationService, 
              Store, 
              StoreService,
              LoadingService,
              AuthGuard,
              AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  