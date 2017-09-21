import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, PaginationModule, TabsModule, TimepickerModule } from 'ngx-bootstrap';
import { AdminComponent } from './admin.component';
import { UIModule } from '../ui/ui.module';
import { EstadoComponent } from './estado/estado.component';
import { AdminRoutingModule } from './admin.routing.module';
import { ProductosComponent } from './productos/productos.component';
import { PagerService } from '../../service/pager.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductoFormComponent } from './productos/producto-form.component';
import { ProductoEliminarComponent } from './productos/producto-eliminar.component';
import { ProductoFormService } from './productos/producto-form.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        UIModule,
        ReactiveFormsModule,
        TabsModule.forRoot(),
        BsDropdownModule.forRoot(),
        TimepickerModule.forRoot(),
        ModalModule.forRoot(),
        AdminRoutingModule,
        PaginationModule.forRoot(),
        NgbModule.forRoot()
    ],
    declarations: [
        AdminComponent,
        EstadoComponent,
        ProductosComponent,
        ProductoFormComponent,
        ProductoEliminarComponent
    ],
    providers: [
        PagerService,
        ProductoFormService
    ],
    entryComponents: [
        ProductoFormComponent,
        ProductoEliminarComponent
    ]
})
export class AdminModule {
}
