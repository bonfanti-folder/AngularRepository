export class EstadoPago {
    static estadosPago = [{
        'id': 1,
        'label': 'Aceptado'
    }, {
        'id': 2,
        'label': 'Rechazado'
    }, {
        'id': 3,
        'label': 'Pendiente'
    }];

    static build() {
        const estadosPago = EstadoPago.estadosPago.map((e) => {
            return e.label;
        });
        estadosPago.sort();
        return estadosPago;
    }

    static export() {
        const tipoContactos = EstadoPago.estadosPago;
        tipoContactos.sort((a, b) => {
            return (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0);
        });
        return tipoContactos;
    }

    static findByLabel(label) {
        const estadoPago = EstadoPago.estadosPago;
        let id;
        for (const x of estadoPago) {
            if (x.label === label) {
                id = x.id;
                break;
            }
        }
        return id;
    }
}
