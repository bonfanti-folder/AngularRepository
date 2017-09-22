"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../../domain/user");
var LoginComponent = (function () {
    function LoginComponent(router, alertService, auth) {
        this.router = router;
        this.alertService = alertService;
        this.auth = auth;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.auth.logout();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        if (this.sub1) {
            this.sub1.unsubscribe();
        }
    };
    LoginComponent.prototype.login = function () {
        var user = new user_1.User();
        user.email = this.model.email.trim();
        user.password = this.model.password;
        this.auth.login(user);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
