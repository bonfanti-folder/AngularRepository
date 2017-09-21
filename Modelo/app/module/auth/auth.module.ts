    import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { StoreService } from '../../service/store.service';
import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHomeComponent } from './auth-home.component';
import { UIModule } from '../ui/ui.module';

@NgModule({
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UIModule
    ],
    declarations: [
        LoginComponent,
        AuthHomeComponent,
    ],
    providers: [
        StoreService
    ]
})
export class AuthModule {
}
