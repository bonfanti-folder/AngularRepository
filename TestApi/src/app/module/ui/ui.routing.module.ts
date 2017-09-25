import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicHomeComponent } from './public-home/public-home.component';
import { AdminModule } from '../admin/admin.module';
import { AuthGuard } from '../../service/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: PublicHomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: PublicHomeComponent,
            },
        ]
    },
    { 
        path: 'admin',  
        canActivate: [AuthGuard],
        loadChildren: '../admin/admin.module#AdminModule', 
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class UIRoutingModule {
}