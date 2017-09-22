"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PedidoService = (function () {
    function PedidoService(api, storeService) {
        this.api = api;
        this.storeService = storeService;
        this.pathManagment = "pedido/";
    }
    PedidoService.prototype.getAllPedidos = function () {
        var _this = this;
        var path = this.pathManagment + 'pendienteycerrado/';
        return this.api.get(path, true)
            .then(function (data) {
            _this.storeService.update('pedidos', data);
        });
    };
    PedidoService.prototype.changeStatePedido = function (pedido) {
        var path = "" + this.pathManagment + pedido.id + "/estado";
        return this.api.put(path, pedido.estadoPedido, true);
    };
    PedidoService = __decorate([
        core_1.Injectable()
    ], PedidoService);
    return PedidoService;
}());
exports.PedidoService = PedidoService;
