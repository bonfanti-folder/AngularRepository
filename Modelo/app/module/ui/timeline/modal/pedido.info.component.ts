import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pedido } from '../../../../domain/pedido';
import { StoreService } from '../../../../service/store.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-pedido-info',
    templateUrl: './pedido.info.component.html',
})
export class PedidoInfoModalComponent implements OnInit {

    private pedido: Pedido;

    constructor(private storeService: StoreService,
        public activeModal: NgbActiveModal,
        public changeRef: ChangeDetectorRef) {
    }

    ngOnInit() {

        this.pedido = this.storeService.get('pedidoInfo');
    }
}
