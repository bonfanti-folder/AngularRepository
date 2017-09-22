import { NgModule } from '@angular/core';
import { PublicHomeComponent } from './public-home/public-home.component';
import { UIRoutingModule } from './ui.routing.module';


@NgModule({
    imports: [
        UIRoutingModule,
    ],
    declarations: [
        PublicHomeComponent,
    ],
    providers: [

    ]
})
export class UIModule {
}