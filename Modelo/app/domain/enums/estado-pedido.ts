export class EstadoPedido {

    static estadosPedido = [{
        'id': 1,
        'descripcion': 'Pendiente'
    }, {
        'id': 2,
        'descripcion': 'Confirmado'
    }, {
        'id': 3,
        'descripcion': 'Cerrado'
    }];
    id: number;
    descripcion: string;

    static build() {
        const tipoEstados = EstadoPedido.estadosPedido.map((e) => {
            return e.descripcion;
        });
        tipoEstados.sort();
        return tipoEstados;
    }

    static export() {
        const tipoContactos = EstadoPedido.estadosPedido;
        tipoContactos.sort((a, b) => {
            return (a.descripcion > b.descripcion) ? 1 : ((b.descripcion > a.descripcion) ? -1 : 0);
        });
        return tipoContactos;
    }

    static findByLabel(label) {
        const estadoPedido = EstadoPedido.estadosPedido;
        let id;
        for (const x of estadoPedido) {
            if (x.descripcion === label) {
                id = x.id;
                break;
            }
        }
        return id;
    }

    static findById(identificador) {
        const estadoPedido = EstadoPedido.estadosPedido;
        let id;
        for (const x of estadoPedido) {
            if (x.id === identificador) {
                id = x.id - 1;
                break;
            }
        }

        return id;
    }

    toString() {
        return this.descripcion;
    }
}
