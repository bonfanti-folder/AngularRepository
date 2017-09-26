import { ProductosService } from './productos/productos.service';
import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ProductosComponent } from './productos/productos.component';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './productos/mock-productos';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapGridModule } from 'ng2-bootstrap-grid';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        NgbModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        Ng2FilterPipeModule,
        BootstrapGridModule,
        ReactiveFormsModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        ProductosComponent
    ],
    providers: [
     ProductosService
    ],
    entryComponents: [
    /*     ProductoFormComponent,
        ProductoEliminarComponent */
    ]
})
export class AdminModule {
}