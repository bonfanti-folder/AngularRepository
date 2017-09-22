"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Util = (function () {
    function Util() {
        this.innerHeight = window.innerHeight;
        this.innerWidth = window.innerWidth;
    }
    Util.getWidth = function () {
        return window.innerWidth;
    };
    Util.getFirstDefault = function (list) {
        if (list.length == 1)
            return list[0];
        return null;
    };
    Util.label = function (props) {
        var mLabel = '';
        props.forEach(function (prop) {
            mLabel = mLabel + ' ' + prop.toUpperCase();
        });
        return mLabel;
    };
    Util.scrollToTop = function () {
        document.body.scrollTop = 0; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = 0; // For IE and Firefox
    };
    Util.prototype.setWidtEmitter = function (emitter) {
        this.widhtResize = emitter;
    };
    Util.prototype.getWidthResizeEvent = function () {
        return this.widhtResize;
    };
    Util = __decorate([
        core_1.Injectable()
    ], Util);
    return Util;
}());
exports.Util = Util;
