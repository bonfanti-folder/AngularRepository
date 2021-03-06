"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalComponent = (function () {
    function ModalComponent() {
        this.backdrop = 'static';
        this.small = false;
        this.title = '';
        this.outModal = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.outModal.emit(this.modal);
    };
    __decorate([
        core_1.ViewChild('staticModal')
    ], ModalComponent.prototype, "modal", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "backdrop", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "small", void 0);
    __decorate([
        core_1.Input()
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output()
    ], ModalComponent.prototype, "outModal", void 0);
    ModalComponent = __decorate([
        core_1.Component({
            selector: 'app-modal',
            templateUrl: './modal.component.html'
        })
    ], ModalComponent);
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
