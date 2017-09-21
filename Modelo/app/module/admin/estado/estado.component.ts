import { Component, OnDestroy, OnInit } from '@angular/core';
import { StompService } from 'ng2-stomp-service';
import { Store } from '../../../service/store';
import { Pedido } from '../../../domain/pedido';
import { PedidoService } from '../../../service/pedido.service';
import { StoreService } from '../../../service/store.service';

@Component({
    selector: 'app-estado',
    templateUrl: './estado.component.html'
})
export class EstadoComponent implements OnInit, OnDestroy {

    pedidos: Pedido[] = [];

    pedidosPendientes: Pedido[] = [];
    pedidosConfirmados: Pedido[] = [];
    pedidosCerrados: Pedido[] = [];

    subscription: any;

    constructor(private store: Store,
        private pedidoService: PedidoService,
        private storeService: StoreService,
        private stomp: StompService) {

        stomp.configure({
            host: '/api/websocket',
            debug: true,
            queue: { 'init': false },
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        });

        // start connection
        stomp.startConnect().then(() => {
            stomp.done('init');
            this.subscription = stomp.subscribe('/escuchar/nuevospedidos', this.response);
        });

        this.store.changes.pluck('pedidos').subscribe((data: any) => {
            this.pedidos = data;

            if (!data) {
                return;
            }

            this.pedidosConfirmados = this.pedidos.filter(pedido => pedido.estadoPedido === 'CONFIRMADO');
            this.pedidosPendientes = this.pedidos.filter(pedido => pedido.estadoPedido === 'PENDIENTE');
            this.pedidosCerrados = this.pedidos.filter(pedido => pedido.estadoPedido === 'CERRADO');

            this.pedidosConfirmados.sort(this.sortit);
            this.pedidosPendientes.sort(this.sortit);
            this.pedidosCerrados.sort(this.sortit);

        });

    }

    sortit(a, b) {
        return (b.id > a.id) ? 1 : ((a.id > b.id) ? -1 : 0);
    }

    ngOnInit() {
        this.pedidoService.getAllPedidos();
    }

    ngOnDestroy(): void {
        if (this.stomp) {
            this.stomp.disconnect();
        }
    }

    response = (data) => {
        if (!data) {
            return;
        }

        const pedido: Pedido = data;
        const pedidos = this.storeService.get('pedidos');
        pedidos.unshift(pedido);
        this.storeService.update('pedidos', pedidos);

    }

}
