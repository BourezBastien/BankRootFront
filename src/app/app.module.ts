import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {httpInterceptorProviders} from "./_helpers";
import {AdminArenaModule} from "./pages/admin-arena/admin-arena.module";
import {ClientArenaModule} from "./pages/client-arena/client-arena.module";
import {HomepageModule} from "./pages/homepage/homepage.module";
import {LoginModule} from "./pages/login/login.module";
import {RegistrationModule} from "./pages/registration/registration.module";
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ToastrModule.forRoot({
      timeOut: 4000,
      progressBar: true,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,
    }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AdminArenaModule,
    ClientArenaModule,
    HomepageModule,
    LoginModule,
    RegistrationModule,
    BrowserAnimationsModule,

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
