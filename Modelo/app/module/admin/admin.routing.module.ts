import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TimelineComponent } from '../ui/timeline/timeline.component';
import { PedidoService } from '../../service/pedido.service';
import { ProductosComponent } from './productos/productos.component';
import { ProductoService } from '../../service/producto.service';
import { ProductoResolveService } from '../../service/resolve/productos-resolve.service';
import { EstadoComponent } from './estado/estado.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: 'estado',
                pathMatch: 'full'
            },
            {
                path: 'estado',
                component: EstadoComponent
            }
            ,
            {
                path: 'productos',
                component: ProductosComponent,
                resolve: {
                    productos: ProductoResolveService
                }
            }
        ]
    }
]

const providers = [
    PedidoService,
    ProductoService
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: providers
})

export class AdminRoutingModule {
}
