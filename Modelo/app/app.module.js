"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app.routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var utils_service_1 = require("./service/utils.service");
var alert_service_1 = require("./service/alert.service");
var store_1 = require("./service/store");
var store_service_1 = require("./service/store.service");
var api_service_1 = require("./service/api.service");
var loading_service_1 = require("./service/loading.service");
var ui_module_1 = require("./module/ui/ui.module");
var auth_guard_1 = require("./service/guard/auth.guard");
var auth_service_1 = require("./module/auth/auth.service");
var ng2_stomp_service_1 = require("ng2-stomp-service");
var producto_service_1 = require("./service/producto.service");
var productos_resolve_service_1 = require("./service/resolve/productos-resolve.service");
var animations_1 = require("@angular/platform-browser/animations");
var providers = [
    { provide: core_1.LOCALE_ID, useValue: 'es-AR' },
    store_1.Store,
    store_service_1.StoreService,
    alert_service_1.AlertService,
    auth_guard_1.AuthGuard,
    auth_service_1.AppAuthService,
    api_service_1.ApiService,
    loading_service_1.LoadingService,
    utils_service_1.Util,
    ng2_stomp_service_1.StompService,
    producto_service_1.ProductoService,
    productos_resolve_service_1.ProductoResolveService
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                http_1.HttpModule,
                router_1.RouterModule,
                ui_module_1.UIModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: providers
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
