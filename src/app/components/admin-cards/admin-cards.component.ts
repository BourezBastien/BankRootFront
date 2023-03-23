import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../_services/api.service";
import {NotificationService} from "../../_services/notification.service";
import {BrowserModule} from "@angular/platform-browser";

@Component({
  standalone: true,
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss'],
  imports: [BrowserModule]
})
export class AdminCardsComponent implements OnInit {
  requests!: any[];

  constructor(private apiservice: ApiService, private notificationService: NotificationService) {
  }

  OVERDRAFT_LIMIT = 0;
  WITHDRAWAL_LIMIT = 0;
  PAYMENT_CEILING = 0;

  async ngOnInit() {
    const requests = await this.getRequests();
    this.requests = requests;
    if (requests) {
      requests.map((item: any) => {
          if (item.request_type === "OVERDRAFT_LIMIT") {
            this.OVERDRAFT_LIMIT++
          } else if (item.request_type === "WITHDRAWAL_LIMIT") {
            this.WITHDRAWAL_LIMIT++
          } else {
            this.PAYMENT_CEILING++
          }
        }
      )
      return this.notificationService.openInfo("Demandes", `Vous avez ${this.OVERDRAFT_LIMIT + this.WITHDRAWAL_LIMIT + this.PAYMENT_CEILING} demande(s) en attente`)
    } else {
      return this.notificationService.openInfo("Demandes", "Aucune nouvelles demandes")
    }
  }


  getRequests() {
    return new Promise<any>((resolve, reject) => {
      this.apiservice.getRequests().subscribe((data: any) => {
        resolve(data);
      });
    });
  }


}
