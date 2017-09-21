import { Pedido } from './pedido';

export class Aplicacion {
    id?: number;
    identificador: string;
    dispositivo: string;
    pedidos: Pedido[];

    constructor() {
        this.id = 0;
    }
}
