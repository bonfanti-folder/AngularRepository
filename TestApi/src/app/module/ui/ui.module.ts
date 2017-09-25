import { NgModule } from '@angular/core';
import { PublicHomeComponent } from './public-home/public-home.component';
import { UIRoutingModule } from './ui.routing.module';
import { AdminModule } from '../admin/admin.module';


@NgModule({
    imports: [
        UIRoutingModule,
        AdminModule
    ],
    declarations: [
        PublicHomeComponent,
    ],
    providers: [

    ]
})
export class UIModule {
}