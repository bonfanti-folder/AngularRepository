"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InfoStepComponent = (function () {
    function InfoStepComponent() {
        this.steps = [];
    }
    InfoStepComponent.prototype.ngOnInit = function () {
        this.steps.forEach(function (step) {
            if (!step.ngClass)
                step.ngClass = 'btn-warning';
        });
    };
    __decorate([
        core_1.Input()
    ], InfoStepComponent.prototype, "steps", void 0);
    InfoStepComponent = __decorate([
        core_1.Component({
            selector: 'app-info-step',
            templateUrl: './info-step.component.html',
            styleUrls: ['./info-step.component.scss']
        })
    ], InfoStepComponent);
    return InfoStepComponent;
}());
exports.InfoStepComponent = InfoStepComponent;
