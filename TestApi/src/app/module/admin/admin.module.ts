import { ProductosService } from './productos/productos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
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