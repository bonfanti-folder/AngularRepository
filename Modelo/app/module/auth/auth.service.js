"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var AppAuthService = (function () {
    // basePath = 'core/';
    function AppAuthService(api, router) {
        this.api = api;
        this.router = router;
    }
    AppAuthService_1 = AppAuthService;
    AppAuthService.getRole = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        if (!user || !user.roles) {
            return 'ROLE_USER';
        }
        var role = user.roles[0].authority;
        if (role) {
            return role;
        }
        return 'ROLE_USER';
    };
    AppAuthService.isAdmin = function () {
        var role = AppAuthService_1.getRole();
        return role === 'ROLE_ADMIN';
    };
    AppAuthService.prototype.login = function (user) {
        user = {
            email: user.email,
            password: user.password
        };
        return this.normalLogin(user);
    };
    AppAuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.api.removeJwt();
        return this.router.navigate(['/auth/login']);
    };
    AppAuthService.prototype.normalLogin = function (user) {
        var _this = this;
        var path = "login";
        return this.api
            .loginPost(path, user)
            .then(function () { return _this.router.navigate(['/']); });
    };
    AppAuthService = AppAuthService_1 = __decorate([
        core_1.Injectable()
    ], AppAuthService);
    return AppAuthService;
    var AppAuthService_1;
}());
exports.AppAuthService = AppAuthService;
