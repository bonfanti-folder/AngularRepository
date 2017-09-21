import { Component, Input } from '@angular/core';
import { StoreService } from '../../../service/store.service';
import { PedidoService } from '../../../service/pedido.service';
import { AlertService } from '../../../service/alert.service';
import { Pedido } from '../../../domain/pedido';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PedidoInfoModalComponent } from './modal/pedido.info.component';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

    @Input() pedidos = [];
    @Input() tipoEstado = 'PENDIENTE';

    helpMenuOpen: String;

    constructor(private storeService: StoreService,
        private pedidoService: PedidoService,
        private alertService: AlertService,
        private modalService: NgbModal) {
    }

    getPedidoCssClass(pedido: Pedido) {
        return {
            'fa-credit-card-alt': pedido.formaPago.tipoMedioPago.tipoPago.descripcion.toUpperCase() === 'TARJETA',
            'fa-dollar': pedido.formaPago.tipoMedioPago.tipoPago.descripcion.toUpperCase() === 'EFECTIVO'
        };
    }

    getBadgeCssClass(pedido: Pedido) {
        const estado = pedido.estadoPedido;
        return {
            'success': estado === 'CONFIRMADO',
            'info': estado === 'PENDIENTE',
        };
    }

    toggleHelpMenu(): void {
        this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    }

    onClick(event, pedido) {
        this.storeService.update('pedidoInfo', pedido);
        const modalRef = this.modalService.open(PedidoInfoModalComponent);
    }

    onClickConfirmado(event, data: Pedido) {
        data.estadoPedido = 'CONFIRMADO';
        this.submitChangeEstadoPedido(data);
        const index = this.pedidos.indexOf(data, 0);

        if (index > -1) {
            this.pedidos.splice(index, 1);
        }
    }

    onClickCerrado(event, data) {
        data.estadoPedido = 'CERRADO';
        this.submitChangeEstadoPedido(data);
        const index = this.pedidos.indexOf(data, 0);

        if (index > -1) {
            this.pedidos.splice(index, 1);
        }
    }

    submitChangeEstadoPedido(pedido) {
        this.pedidoService.changeStatePedido(pedido)
            .then((data) => {

                if (!data) {
                    return;
                }
                pedido = data;
                const pedidos = this.storeService.get('pedidos');
                for (const entry of pedidos) {
                    if (entry.id === pedido.id) {
                        entry.estadoPedido = pedido.estadoPedido;
                    }
                }
                this.storeService.update('pedidos', pedidos);

                this.alertService.success('Se cambio el estado correctamente');

            });
    }

    public getEstado(pedido: Pedido) {
        return pedido.estadoPedido || '';
    }
}
