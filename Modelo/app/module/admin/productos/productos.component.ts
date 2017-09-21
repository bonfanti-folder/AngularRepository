import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../domain/producto';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '../../../service/store';
import { PagerService } from '../../../service/pager.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductoService } from '../../../service/producto.service';
import { ProductoFormService } from './producto-form.service';

class Data {
    nombre: string;
    descripcion: string;
    precio: number;
}

@Component({
    selector: 'app-productos',
    templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

    productos: Producto[] = [];

    totalItems = 0;
    currentPage = 1;
    smallnumPages = 0;
    maxSize = 10;
    // pager object
    pager: any = {};
    // paged items
    pagedItems: any[];
    subs: Subscription[] = [];

    constructor(private store: Store,
        private pagerService: PagerService,
        private productoFormService: ProductoFormService,
        private sanitizer: DomSanitizer,
        private productoService: ProductoService) {

    }

    openNewModal() {
        this.productoFormService.buildNew();
    }

    openUpdateModal(producto: Producto) {
        this.productoFormService.buildEdit(producto);
    }

    openDeleteModal(producto: Producto) {
        this.productoFormService.buildDelete(producto);
    }

    public setPage(page: number): void {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.productos.length, page);

        // get current page of items
        this.pagedItems = this.productos.slice(this.pager.startIndex, this.pager.endIndex + 1);
        this.currentPage = page;
        this.totalItems = this.pager.totalPages * this.maxSize;
    }

    public pageChanged(event: any): void {
        this.setPage(event.page);
    }

    ngOnInit(): void {

        this.subs.push(
            this.store.changes.pluck('productos').subscribe(
                (data: any) => {
                    this.productos = data;
                    this.setPage(this.pager.currentPage);
                    // this.pagedItems = this.productos.slice(this.pager.startIndex, this.pager.endIndex + 1);
                }
            ));

        // initialize to page 1
        this.setPage(1);
    }

    public ngOnDestroy(): void {
        this.subs.forEach(x => x.unsubscribe());
    }

    public getProductImage(producto: Producto) {
        return this.sanitizer.bypassSecurityTrustUrl('data:image/png;base64,' + producto.imagen);
    }

    public getNoImage() {
        return this.sanitizer.bypassSecurityTrustUrl('this.src=\'assets/img/noimage.png\'');
    }

}
