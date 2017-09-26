import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../domain/producto';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '../../../service/store';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';



class Data {
    nombre: string;
    descripcion: string;
    precio: number;
}

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html',
    styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit{
    productos: Producto[];
    selectedProducto: Producto;
    prodFilter: any = { nombre: '' };
    model: any = {};

    constructor(private productosService: ProductosService,
                private router: Router) {
                 }

    add(e): void {
    e.preventDefault();
    console.log(this.model);
    this.productosService.create(this.model)
        .then(producto => {
        this.productos.push(producto);
        this.selectedProducto = null;
        });
    }

     getProducts(): void {
        this.productosService.getProductos().then(data=> this.productos = data);  
    }  

    ngOnInit(): void {
        this.getProducts();  
    }
    
    onSelect(prod: Producto): void {
        this.selectedProducto = prod;
    }


 
  



}
