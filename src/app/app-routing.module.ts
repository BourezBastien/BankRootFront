import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {AdminArenaComponent} from "./pages/admin-arena/admin-arena.component";
import {ClientArenaComponent} from "./pages/client-arena/client-arena.component";
import {canActivate} from "./_guard/auth-guad.service";

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'admin', component: AdminArenaComponent, canActivate: [canActivate]},
  {path: 'client', component: ClientArenaComponent, canActivate: [canActivate]}

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
