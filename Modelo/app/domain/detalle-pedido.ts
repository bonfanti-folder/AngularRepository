import { Pedido } from './pedido';
import { Producto } from './producto';

export class DetallePedido {
    id?: number;
    producto: Producto;
    pedido: Pedido;
    cantidad: number;
    precioUnitario: number;

    constructor() {
        this.id = 0;
    }
}
