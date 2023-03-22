import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login.component';
import {CommonComposentModule} from "../../components/common.module";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule {
}
