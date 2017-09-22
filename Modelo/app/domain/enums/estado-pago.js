"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EstadoPago = (function () {
    function EstadoPago() {
    }
    EstadoPago.build = function () {
        var estadosPago = EstadoPago.estadosPago.map(function (e) {
            return e.label;
        });
        estadosPago.sort();
        return estadosPago;
    };
    EstadoPago.export = function () {
        var tipoContactos = EstadoPago.estadosPago;
        tipoContactos.sort(function (a, b) {
            return (a.label > b.label) ? 1 : ((b.label > a.label) ? -1 : 0);
        });
        return tipoContactos;
    };
    EstadoPago.findByLabel = function (label) {
        var estadoPago = EstadoPago.estadosPago;
        var id;
        for (var _i = 0, estadoPago_1 = estadoPago; _i < estadoPago_1.length; _i++) {
            var x = estadoPago_1[_i];
            if (x.label === label) {
                id = x.id;
                break;
            }
        }
        return id;
    };
    EstadoPago.estadosPago = [{
            'id': 1,
            'label': 'Aceptado'
        }, {
            'id': 2,
            'label': 'Rechazado'
        }, {
            'id': 3,
            'label': 'Pendiente'
        }];
    return EstadoPago;
}());
exports.EstadoPago = EstadoPago;
