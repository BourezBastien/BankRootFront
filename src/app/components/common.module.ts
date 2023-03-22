import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ClientListComponent} from "./client-list/client-list.component";
import {AdminCardsComponent} from "./admin-cards/admin-cards.component";

@NgModule({
  declarations: [],
  imports: [HeaderComponent, FooterComponent, ClientListComponent, AdminCardsComponent],
  exports: [HeaderComponent, FooterComponent, ClientListComponent, AdminCardsComponent],
})
export class CommonComposentModule {
}