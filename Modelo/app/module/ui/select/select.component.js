"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectComponent = (function () {
    function SelectComponent() {
        // placeholder a mostrar dentro del select
        this.placeHolder = '';
        // lista de propiedades a mostrar como option
        this.displayProp = [];
        // onChange Event callback
        this.change = new core_1.EventEmitter();
        this.mModel = null;
        this.item = null;
        // onChange para model driven form
        this.onChange = new core_1.EventEmitter();
    }
    Object.defineProperty(SelectComponent.prototype, "setModel", {
        set: function (item) {
            this.mModel = item;
        },
        enumerable: true,
        configurable: true
    });
    // event emitter para onChange callback
    SelectComponent.prototype.handleChange = function (item) {
        this.item = item;
        if (!this.formControl) {
            this.onChange.emit(item);
        }
    };
    SelectComponent.prototype.label = function (item) {
        var str = '';
        // si no existe retorna
        if (!item) {
            return str;
        }
        // si tenemos un array de propiedades, las recorremos y las concatenamos con un espacio
        if (this.displayProp && this.displayProp.length) {
            this.displayProp.forEach(function (x) {
                if (item[x]) {
                    str += item[x] + ' ';
                }
            });
            return str.toUpperCase();
        }
        // si no hay propiedades suponemos que el item es el string a mostrar
        if (item) {
            str = item;
        }
        // devolvemos en mayuscula
        return str.toUpperCase();
    };
    SelectComponent.prototype.showPlaceholder = function () {
        if (!this.formControl) {
            return !this.item;
        }
        return !this.formControl.value;
    };
    __decorate([
        core_1.Input()
    ], SelectComponent.prototype, "formControl", void 0);
    __decorate([
        core_1.Input()
    ], SelectComponent.prototype, "placeHolder", void 0);
    __decorate([
        core_1.Input()
    ], SelectComponent.prototype, "list", void 0);
    __decorate([
        core_1.Input()
    ], SelectComponent.prototype, "displayProp", void 0);
    __decorate([
        core_1.Output()
    ], SelectComponent.prototype, "change", void 0);
    __decorate([
        core_1.Output()
    ], SelectComponent.prototype, "onChange", void 0);
    __decorate([
        core_1.Input()
    ], SelectComponent.prototype, "setModel", null);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'app-select',
            templateUrl: './select.component.html',
            styleUrls: ['./select.component.scss']
        })
        /*
         Componente <select> reusable para Angular
         permite usarse con Reactive Forms y Model Driven Forms
         */
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
