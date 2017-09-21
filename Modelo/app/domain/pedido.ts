import { FormaPago } from './forma-pago';
import { DetallePedido } from './detalle-pedido';
import { Aplicacion } from './aplicacion';
import { Domicilio } from './domicilio';

export class Pedido {
    id?: number;
    observaciones: string;
    precioTotal: number;
    fechaCreacion: Date;
    formaPago: FormaPago;
    detallesPedido: DetallePedido[];
    estadoPedido: string;
    aplicacion: Aplicacion;
    domicilio: Domicilio;

    constructor() {
        this.id = 0;
    }
}
