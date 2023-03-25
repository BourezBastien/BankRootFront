import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {CommonComposentModule} from "../../components/common.module";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
    RouterLink
  ]
})
export class HomepageModule {
}
