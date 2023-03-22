import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrationComponent} from './registration.component';
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonComposentModule} from "../../components/common.module";


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class RegistrationModule {
}
