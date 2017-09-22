"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/Rx");
var StoreService = (function () {
    function StoreService(store) {
        this.store = store;
    }
    StoreService.prototype.update = function (prop, state) {
        var currentState = this.store.getState();
        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = state, _a)));
        var _a;
    };
    StoreService.prototype.merge = function (obj) {
        var currentState = this.store.getState();
        this.store.setState(Object.assign({}, currentState, obj));
    };
    StoreService.prototype.swap = function (prop, fn) {
        var currentState = this.store.getState();
        this.store.setState(Object.assign({}, currentState, (_a = {},
            _a[prop] = fn(Object.assign({}, currentState[prop])),
            _a)));
        var _a;
    };
    StoreService.prototype.remove = function (prop) {
        var state = this.store.getState();
        var nextState = Object.assign({}, state);
        delete nextState[prop];
        this.store.setState(nextState);
    };
    StoreService.prototype.get = function (prop) {
        var state = this.store.getState();
        return state[prop];
    };
    StoreService.prototype.add = function (prop, state) {
        var currentState = this.store.getState();
        var collection = currentState[prop];
        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = collection.concat([state]), _a)));
        var _a;
    };
    StoreService.prototype.findAndSet = function (coll, id, val) {
        var currentState = this.store.getState();
        var collection = currentState[coll];
        this.store.setState(Object.assign({}, currentState, (_a = {},
            _a[coll] = collection.map(function (item) { return item.id === id ? val : item; }),
            _a)));
        var _a;
    };
    StoreService.prototype.findAndSetProp = function (coll, id, prop, val) {
        var currentState = this.store.getState();
        var collection = currentState[coll];
        this.store.setState(Object.assign({}, currentState, (_a = {},
            _a[coll] = collection.map(function (item) {
                if (item.id !== id) {
                    return item;
                }
                return Object.assign({}, item, (_a = {}, _a[prop] = val, _a));
                var _a;
            }),
            _a)));
        var _a;
    };
    StoreService.prototype.findAndDelete = function (prop, id) {
        var currentState = this.store.getState();
        var collection = currentState[prop];
        this.store.setState(Object.assign({}, currentState, (_a = {}, _a[prop] = collection.filter(function (item) { return item.id !== id; }), _a)));
        var _a;
    };
    StoreService.prototype.find = function (prop, id) {
        var currentState = this.store.getState();
        var collection = currentState[prop];
        return collection && collection.find(function (item) { return item.id === id; });
    };
    StoreService.prototype.clear = function () {
        this.store.clear();
    };
    StoreService.prototype.clearCache = function () {
        this.update('productos', []);
    };
    StoreService = __decorate([
        core_1.Injectable()
    ], StoreService);
    return StoreService;
}());
exports.StoreService = StoreService;
