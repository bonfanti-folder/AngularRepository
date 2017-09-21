import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { StoreService } from './store.service';
import { Pedido } from '../domain/pedido';

@Injectable()
export class PedidoService {

    pathManagment = `pedido/`;

    constructor(private api: ApiService, private storeService: StoreService) {

    }

    getAllPedidos() {
        const path = this.pathManagment + 'pendienteycerrado/';
        return this.api.get(path, true)
            .then(data => {
                this.storeService.update('pedidos', data);
            });
    }

    changeStatePedido(pedido: Pedido) {
        const path = `${this.pathManagment}${pedido.id}/estado`;
        return this.api.put(path, pedido.estadoPedido, true);
    }

}
