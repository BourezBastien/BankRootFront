import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgToastModule} from 'ng-angular-popup';
import {httpInterceptorProviders} from "./_helpers";
import {AdminArenaModule} from "./pages/admin-arena/admin-arena.module";
import {ClientArenaModule} from "./pages/client-arena/client-arena.module";
import {HomepageModule} from "./pages/homepage/homepage.module";
import {LoginModule} from "./pages/login/login.module";
import {RegistrationModule} from "./pages/registration/registration.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
    AdminArenaModule,
    ClientArenaModule,
    HomepageModule,
    LoginModule,
    RegistrationModule

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
