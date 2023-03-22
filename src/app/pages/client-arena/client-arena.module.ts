import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientArenaComponent} from './client-arena.component';
import {CommonComposentModule} from "../../components/common.module";


@NgModule({
  declarations: [
    ClientArenaComponent
  ],
  imports: [
    CommonModule,
    CommonComposentModule,
  ]
})
export class ClientArenaModule {
}
