"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var Subject_1 = require("rxjs/Subject");
var LoadingService = (function () {
    function LoadingService(router) {
        var _this = this;
        this.router = router;
        this.subject = new Subject_1.Subject();
        this.promiseCount = 0;
        router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationStart)
                _this.subject.next();
        });
    }
    LoadingService.prototype.start = function () {
        if (isNaN(this.promiseCount))
            this.promiseCount = 0;
        if (this.promiseCount >= 0)
            this.promiseCount++;
        this.subject.next(this.promiseCount);
    };
    LoadingService.prototype.finish = function () {
        if (isNaN(this.promiseCount))
            this.promiseCount = 0;
        else if (this.promiseCount > 0)
            this.promiseCount--;
        this.subject.next(this.promiseCount);
    };
    LoadingService.prototype.reset = function () {
        this.promiseCount = 0;
        this.subject.next(this.promiseCount);
    };
    LoadingService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    LoadingService = __decorate([
        core_1.Injectable()
    ], LoadingService);
    return LoadingService;
}());
exports.LoadingService = LoadingService;
