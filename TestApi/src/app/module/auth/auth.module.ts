import { AppAuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { StoreService } from '../../service/store.service';
import { AuthRoutingModule } from './auth.routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthHomeComponent } from './auth-home.component';

@NgModule({
    imports: [
        AuthRoutingModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
        AuthHomeComponent,
    ],
    providers: [
        StoreService,
        AppAuthService
    ]
})
export class AuthModule {
}