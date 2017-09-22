"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppState = (function () {
    function AppState() {
        this.steps = [];
        this.lastError = {};
        this.fecha = '';
        this.validDayFlag = true;
        this.productos = [];
    }
    return AppState;
}());
exports.AppState = AppState;
