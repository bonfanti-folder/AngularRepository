import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from '../../../service/producto.service';
import { AlertService } from '../../../service/alert.service';
import { Producto } from '../../../domain/producto';
import { StoreService } from '../../../service/store.service';

@Component({
    selector: 'app-producto-eliminar.component',
    templateUrl: './producto-eliminar.component.html'
})
export class ProductoEliminarComponent implements OnInit {

    @Input() producto: Producto = new Producto();

    constructor(public activeModal: NgbActiveModal,
        public changeRef: ChangeDetectorRef,
        private alertService: AlertService,
        private productoService: ProductoService,
        private storeService: StoreService) {
    }

    ngOnInit(): void {

    }

    public deleteProducto() {
        const productos = this.storeService.get('productos');
        for (const x of productos) {
            if (x.id === this.producto.id) {
                this.delete(x);
                break;
            }
        }
    }

    delete(producto: Producto) {
        this.productoService.deleteProducto(producto)
            .then(() => {
                this.handleResponseSuccess();
            })
            .catch(cause => {
                this.handleResponseError(cause);
            });
    }

    handleResponseSuccess() {
        this.activeModal.close();
        this.alertService.success('Se elimino exitosamente');
    }

    handleResponseError(cause) {
        const errorMessage = JSON.parse(cause._body).errorDescription;
        this.alertService.error('Se produjo un error al eliminar: ' + errorMessage);
    }
}
