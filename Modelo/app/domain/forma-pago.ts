import { Pedido } from './pedido';
import { EstadoPago } from './enums/estado-pago';
import { TipoMedioPago } from './tipo-medio-pago';

export class FormaPago {

    id?: number;
    pedido: Pedido;
    fechaPago: Date;
    tipoMedioPago: TipoMedioPago;
    estadoPago: EstadoPago;

}
