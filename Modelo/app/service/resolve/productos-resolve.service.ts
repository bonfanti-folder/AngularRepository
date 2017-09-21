import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductoService } from '../producto.service';

@Injectable()
export class ProductoResolveService implements Resolve<any> {

    constructor(private productoService: ProductoService) {
    }

    resolve(): Promise<any> {
        return this.productoService.getProductos();
    }

}
