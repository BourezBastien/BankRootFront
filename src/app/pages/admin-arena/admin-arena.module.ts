import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminArenaComponent} from './admin-arena.component';
import {CommonComposentModule} from "../../components/common.module";
import {RouterLink, RouterLinkActive} from "@angular/router";


@NgModule({
  declarations: [
    AdminArenaComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
  ]
})
export class AdminArenaModule {
}
