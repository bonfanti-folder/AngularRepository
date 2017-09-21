import { FormaPago } from './forma-pago';
import { TipoPago } from './tipo-pago';
import { MedioPago } from './medio-pago';

export class TipoMedioPago {
    id?: number;
    medioPago: MedioPago;
    tipoPago: TipoPago;
    formasPago: FormaPago[];

    constructor() {
        this.id = 0;
    }
}
