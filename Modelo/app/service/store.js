"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var app_state_1 = require("../domain/app-state");
// estado inicial
var state = new app_state_1.AppState();
var store = new BehaviorSubject_1.BehaviorSubject(state);
var localforage = require('localforage');
var Store = (function () {
    function Store() {
        this.db = localforage.createInstance({ name: 'VentasDirect' });
        this.changes = store
            .asObservable()
            .distinctUntilChanged();
        this.store = store;
    }
    Store.prototype.get = function (item) {
        return this.db.getItem(item);
    };
    Store.prototype.getState = function () {
        return this.store.value;
    };
    Store.prototype.setState = function (appState) {
        this.store.next(appState);
    };
    Store.prototype.clear = function () {
        this.store.next(state);
    };
    Store = __decorate([
        core_1.Injectable()
    ], Store);
    return Store;
}());
exports.Store = Store;
