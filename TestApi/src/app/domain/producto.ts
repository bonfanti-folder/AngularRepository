export class Producto {
    id?: number;
    nombre: string;
    descripcion?: string;
    precio: number;
    imagen?: string;

    constructor() {
        this.id = 0;
    }
}