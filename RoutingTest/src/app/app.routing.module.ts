import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'empresa',
  },
  {
    path: 'empresa',
    loadChildren: './module/ui/ui.module#UIModule'
  },
  {path: 'login', loadChildren: './module/login/login.module#LoginModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
