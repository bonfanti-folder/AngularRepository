import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './module/auth/login/login.component';
import { PublicHomeComponent } from './module/ui/public-home/public-home.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: './module/auth/auth.module#AuthModule',
    },
    { path: 'home',  
      loadChildren: './module/ui/ui.module#UIModule', 
    },
    { path: '',
      redirectTo: 'home',
      pathMatch: 'full'
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