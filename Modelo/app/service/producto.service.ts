import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { Producto } from '../domain/producto';

@Injectable()
export class ProductoService {

    pathManagment = `producto`;

    constructor(private api: ApiService, private storeService: StoreService) {

    }

    getProductos(): Promise<any> {
        const path = this.pathManagment;
        return this.api.get(path, true)
            .then(data => {
                this.storeService.update('productos', data);
            });
    }

    saveProducto(producto: Producto): Promise<any> {
        const path = `${this.pathManagment}`;
        return this.api.post(path, producto, true)
            .then(data => {
                producto.id = data;
                this.storeService.add('productos', producto);
            });
    }

    updateProducto(producto: Producto): Promise<any> {
        const path = `${this.pathManagment}/${producto.id}`;
        return this.api.put(path, producto, true)
            .then(data => {
                this.storeService.findAndSet('productos', producto.id, data);
            });
    }

    deleteProducto(producto: Producto): Promise<any> {
        const path = `${this.pathManagment}/${producto.id}`;
        return this.api.delete(path, true)
            .then(() => {
                this.storeService.findAndDelete('productos', producto.id);
            });
    }

    getImage(producto: Producto) {
        const path = `${this.pathManagment}/${producto.id}/imagenBytes`;
        return this.api.getResponse(path, true);
    }

}
