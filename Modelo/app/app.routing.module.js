"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var core_component_1 = require("./module/ui/core/core.component");
var public_home_component_1 = require("./module/ui/public-home/public-home.component");
var auth_guard_1 = require("./service/guard/auth.guard");
var routes = [
    {
        path: '',
        component: core_component_1.CoreComponent,
        canActivate: [auth_guard_1.AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: public_home_component_1.PublicHomeComponent
            },
            /*{ path: 'login', loadChildren: './module/login/login.module#LoginModule' },*/
            {
                path: 'admin',
                loadChildren: './module/admin/admin.module#AdminModule',
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './module/auth/auth.module#AuthModule',
    },
    // otherwise redirect to home
    { path: '**', redirectTo: '/auth/login' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
