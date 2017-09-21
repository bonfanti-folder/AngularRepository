import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';

@Injectable()
export class ApplicationService  {

    pathManagment = `greeting`;

    constructor(private api: ApiService, private storeService: StoreService) {

    }

    getGretting(nombre: string): Promise<any> {
        const path = this.pathManagment;
        return this.api.get(path, "?name=" + nombre, true)
            .then(data => {
                console.log(data);
                return data;
            });
    }

/*     saveProducto(producto: Producto): Promise<any> {
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

 */}
