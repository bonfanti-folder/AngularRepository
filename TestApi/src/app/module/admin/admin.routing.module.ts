import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'productos',
                component: ProductosComponent,
            }
        ]
    }
]

const providers = [
    //ProductoService
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: providers
})

export class AdminRoutingModule {
}