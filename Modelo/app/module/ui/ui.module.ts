import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { CoreComponent } from './core/core.component';
import { ModalComponent } from './modal/modal.component';
import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { SelectComponent } from './select/select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoStepComponent } from './info-step/info-step.component';
import { FooterComponent } from './footer/footer.component';
import { PublicHomeComponent } from './public-home/public-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidoInfoModalComponent } from './timeline/modal/pedido.info.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        NgbModule.forRoot()

    ],
    declarations: [
        AlertComponent,
        CoreComponent,
        LoadingComponent,
        ModalComponent,
        SelectComponent,
        InfoStepComponent,
        FooterComponent,
        PublicHomeComponent,
        SidebarComponent,
        HeaderComponent,
        TimelineComponent,
        PedidoInfoModalComponent
    ],
    exports: [
        AlertComponent,
        CoreComponent,
        LoadingComponent,
        ModalComponent,
        SelectComponent,
        InfoStepComponent,
        FooterComponent,
        PublicHomeComponent,
        SidebarComponent,
        HeaderComponent,
        TimelineComponent,
        PedidoInfoModalComponent
    ],
    entryComponents: [PedidoInfoModalComponent]
})
export class UIModule {
}
