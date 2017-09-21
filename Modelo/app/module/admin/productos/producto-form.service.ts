import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoFormComponent } from './producto-form.component';
import { ProductoEliminarComponent } from './producto-eliminar.component';
import { Producto } from '../../../domain/producto';

@Injectable()
export class ProductoFormService {

    constructor(private modalService: NgbModal) {
    }

    buildNew() {
        const modal = this.open();
        modal.componentInstance.isEdit = false;
    }

    buildEdit(producto: Producto) {
        const modal = this.open();
        modal.componentInstance.isEdit = true;
        modal.componentInstance.producto = producto;
    }

    buildDelete(producto: Producto) {
        const modal = this.openView();
        modal.componentInstance.producto = producto;
    }

    private open() {
        // NOTE: We don't want users accidentally closing the modal, that's why we
        // use "backdrop: 'static'" to prevent closing when the backdrop is
        // clicked and 'keyboard: false' to do nothing when ESC is pressed.
        return this.modalService.open(ProductoFormComponent, {
            backdrop: 'static',
            keyboard: false
        });
        // modal.close(result: any)
        // modal.dismiss(reason: any)
        // modal.result.then((result: any) => {}, (reason: any) => {})
        // Reason may be ModalDismissReasons.ESC or ModalDismissReasons.BACKDROP_CLICK. Or maybe other?
        // import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
    }

    private openView() {
        // NOTE: We don't want users accidentally closing the modal, that's why we
        // use "backdrop: 'static'" to prevent closing when the backdrop is
        // clicked and 'keyboard: false' to do nothing when ESC is pressed.
        return this.modalService.open(ProductoEliminarComponent, {
            backdrop: 'static',
            keyboard: false
        });
        // modal.close(result: any)
        // modal.dismiss(reason: any)
        // modal.result.then((result: any) => {}, (reason: any) => {})
        // Reason may be ModalDismissReasons.ESC or ModalDismissReasons.BACKDROP_CLICK. Or maybe other?
        // import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
    }
}

