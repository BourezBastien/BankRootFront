import {NgModule} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {ClientListComponent} from "./client-list/client-list.component";
import {AdminCardsComponent} from "./admin-cards/admin-cards.component";
import {ClientBankAccountComponent} from './client-bank-account/client-bank-account.component';
import {ClientCradsRequestsComponent} from './client-crads-requests/client-crads-requests.component';

@NgModule({
  imports: [HeaderComponent, FooterComponent, ClientListComponent, AdminCardsComponent, ClientBankAccountComponent, ClientCradsRequestsComponent],
  exports: [HeaderComponent, FooterComponent, ClientListComponent, AdminCardsComponent, ClientBankAccountComponent, ClientCradsRequestsComponent],
})
export class CommonComposentModule {
}