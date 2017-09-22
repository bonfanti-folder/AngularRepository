"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var pedido_info_component_1 = require("./modal/pedido.info.component");
var TimelineComponent = (function () {
    function TimelineComponent(storeService, pedidoService, alertService, modalService) {
        this.storeService = storeService;
        this.pedidoService = pedidoService;
        this.alertService = alertService;
        this.modalService = modalService;
        this.pedidos = [];
        this.tipoEstado = 'PENDIENTE';
    }
    TimelineComponent.prototype.getPedidoCssClass = function (pedido) {
        return {
            'fa-credit-card-alt': pedido.formaPago.tipoMedioPago.tipoPago.descripcion.toUpperCase() === 'TARJETA',
            'fa-dollar': pedido.formaPago.tipoMedioPago.tipoPago.descripcion.toUpperCase() === 'EFECTIVO'
        };
    };
    TimelineComponent.prototype.getBadgeCssClass = function (pedido) {
        var estado = pedido.estadoPedido;
        return {
            'success': estado === 'CONFIRMADO',
            'info': estado === 'PENDIENTE',
        };
    };
    TimelineComponent.prototype.toggleHelpMenu = function () {
        this.helpMenuOpen = this.helpMenuOpen === 'out' ? 'in' : 'out';
    };
    TimelineComponent.prototype.onClick = function (event, pedido) {
        this.storeService.update('pedidoInfo', pedido);
        var modalRef = this.modalService.open(pedido_info_component_1.PedidoInfoModalComponent);
    };
    TimelineComponent.prototype.onClickConfirmado = function (event, data) {
        data.estadoPedido = 'CONFIRMADO';
        this.submitChangeEstadoPedido(data);
        var index = this.pedidos.indexOf(data, 0);
        if (index > -1) {
            this.pedidos.splice(index, 1);
        }
    };
    TimelineComponent.prototype.onClickCerrado = function (event, data) {
        data.estadoPedido = 'CERRADO';
        this.submitChangeEstadoPedido(data);
        var index = this.pedidos.indexOf(data, 0);
        if (index > -1) {
            this.pedidos.splice(index, 1);
        }
    };
    TimelineComponent.prototype.submitChangeEstadoPedido = function (pedido) {
        var _this = this;
        this.pedidoService.changeStatePedido(pedido)
            .then(function (data) {
            if (!data) {
                return;
            }
            pedido = data;
            var pedidos = _this.storeService.get('pedidos');
            for (var _i = 0, pedidos_1 = pedidos; _i < pedidos_1.length; _i++) {
                var entry = pedidos_1[_i];
                if (entry.id === pedido.id) {
                    entry.estadoPedido = pedido.estadoPedido;
                }
            }
            _this.storeService.update('pedidos', pedidos);
            _this.alertService.success('Se cambio el estado correctamente');
        });
    };
    TimelineComponent.prototype.getEstado = function (pedido) {
        return pedido.estadoPedido || '';
    };
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "pedidos", void 0);
    __decorate([
        core_1.Input()
    ], TimelineComponent.prototype, "tipoEstado", void 0);
    TimelineComponent = __decorate([
        core_1.Component({
            selector: 'app-timeline',
            templateUrl: './timeline.component.html',
            styleUrls: ['./timeline.component.scss']
        })
    ], TimelineComponent);
    return TimelineComponent;
}());
exports.TimelineComponent = TimelineComponent;
