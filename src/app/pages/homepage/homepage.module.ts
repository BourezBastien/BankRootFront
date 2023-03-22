import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomepageComponent} from './homepage.component';
import {CommonComposentModule} from "../../components/common.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
  ]
})
export class HomepageModule {
}
