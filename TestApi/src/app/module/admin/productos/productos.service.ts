import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Producto } from '../../../domain/producto';
import { InMemoryDataService } from './mock-productos';
import { ApiService } from '../../../service/api.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductosService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private ProductosUrl = 'api/productos';  // URL to web api
 
    constructor(private http: Http, private api: ApiService) { }

/*     getProducts(): Producto[] {
        return InMemoryDataService;
    } */


    getProductos(): Promise<Producto[]> {
        return this.http.get(this.ProductosUrl)
                   .toPromise()
                   .then(response => response.json().data as Producto[])
                   .catch(this.handleError);
      }


    getProducto(id: number): Promise<Producto> {
        const url = `${this.ProductosUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Producto)
        .catch(this.handleError);
    }
 
    delete(id: number): Promise<void> {
        const url = `${this.ProductosUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
 
    create(product: any): Promise<Producto> {
/*         return this.http
        .post(this.ProductosUrl, JSON.stringify({nombre: product.name, precio: product.precio}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Producto)
        .catch(this.handleError); */
        return this.api.post('productos',  JSON.stringify({nombre: product.name, precio: product.precio}), false)
        .then(data => {
            console.log(data);
            return data;
        });
    }
 
    update(Producto: Producto): Promise<Producto> {
        const url = `${this.ProductosUrl}/${Producto.id}`;
        return this.http
            .put(url, JSON.stringify(Producto), {headers: this.headers})
            .toPromise()
            .then(() => Producto)
            .catch(this.handleError);
    }
 
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }


}