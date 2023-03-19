import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientListComponent} from './components/client-list/client-list.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from "./components/header/header.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgToastModule} from 'ng-angular-popup';
import {httpInterceptorProviders} from "./_helpers/http.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    ClientListComponent,
    HomepageComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
