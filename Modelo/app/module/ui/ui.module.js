"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var alert_component_1 = require("./alert/alert.component");
var loading_component_1 = require("./loading/loading.component");
var core_component_1 = require("./core/core.component");
var modal_component_1 = require("./modal/modal.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var router_1 = require("@angular/router");
var select_component_1 = require("./select/select.component");
var forms_1 = require("@angular/forms");
var info_step_component_1 = require("./info-step/info-step.component");
var footer_component_1 = require("./footer/footer.component");
var public_home_component_1 = require("./public-home/public-home.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var timeline_component_1 = require("./timeline/timeline.component");
var header_component_1 = require("./header/header.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var pedido_info_component_1 = require("./timeline/modal/pedido.info.component");
var UIModule = (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.BsDropdownModule.forRoot(),
                ng_bootstrap_1.NgbModule.forRoot()
            ],
            declarations: [
                alert_component_1.AlertComponent,
                core_component_1.CoreComponent,
                loading_component_1.LoadingComponent,
                modal_component_1.ModalComponent,
                select_component_1.SelectComponent,
                info_step_component_1.InfoStepComponent,
                footer_component_1.FooterComponent,
                public_home_component_1.PublicHomeComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                timeline_component_1.TimelineComponent,
                pedido_info_component_1.PedidoInfoModalComponent
            ],
            exports: [
                alert_component_1.AlertComponent,
                core_component_1.CoreComponent,
                loading_component_1.LoadingComponent,
                modal_component_1.ModalComponent,
                select_component_1.SelectComponent,
                info_step_component_1.InfoStepComponent,
                footer_component_1.FooterComponent,
                public_home_component_1.PublicHomeComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                timeline_component_1.TimelineComponent,
                pedido_info_component_1.PedidoInfoModalComponent
            ],
            entryComponents: [pedido_info_component_1.PedidoInfoModalComponent]
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;
