import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CoreComponent } from './module/ui/core/core.component';
import { PublicHomeComponent } from './module/ui/public-home/public-home.component';
import { AuthGuard } from './service/guard/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: PublicHomeComponent
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
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
