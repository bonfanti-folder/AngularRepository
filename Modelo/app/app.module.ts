import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Util } from './service/utils.service';
import { AlertService } from './service/alert.service';
import { Store } from './service/store';
import { StoreService } from './service/store.service';
import { ApiService } from './service/api.service';
import { LoadingService } from './service/loading.service';
import { UIModule } from './module/ui/ui.module';
import { AuthGuard } from './service/guard/auth.guard';
import { AppAuthService } from './module/auth/auth.service';
import { StompService } from 'ng2-stomp-service';
import { ProductoService } from './service/producto.service';
import { ProductoResolveService } from './service/resolve/productos-resolve.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const providers = [
    { provide: LOCALE_ID, useValue: 'es-AR' },
    Store,
    StoreService,
    AlertService,
    AuthGuard,
    AppAuthService,
    ApiService,
    LoadingService,
    Util,
    StompService,
    ProductoService,
    ProductoResolveService
]

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HttpModule,
        RouterModule,
        UIModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    bootstrap: [AppComponent],
    providers: providers
})
export class AppModule {
}
