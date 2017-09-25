import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../domain/producto';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '../../../service/store';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductosService } from './productos.service';


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

    productos: Producto[] ;
    selectedProducto: Producto;

    constructor(private productosService: ProductosService) { }

    getProducts(): void {
        this.productos = this.productosService.getProducts();
    }

    ngOnInit(): void {
        this.getProducts();
    }
    
    onSelect(prod: Producto): void {
        this.selectedProducto = prod;
    }




}
