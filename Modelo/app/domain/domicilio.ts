import { Localidad } from './localidad';

export class Domicilio {
    id?: number;
    direccion: string;
    localidad: Localidad;

    constructor() {
        this.id = 0;
    }
}
