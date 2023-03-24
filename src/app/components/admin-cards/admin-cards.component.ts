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

  DEPOSIT = 0;
  WHITHDRAW = 0;

  async ngOnInit() {
    const requests = await this.getRequests();
    this.requests = requests;
    if (requests) {
      requests.map((item: any) => {
          console.log(item);
          if (item.type === "deposit") {
            this.DEPOSIT++
          } else if (item.type === "withdraw") {
            this.WHITHDRAW++
          }
        }
      )
      return this.notificationService.openInfo("Demandes", `Vous avez ${this.DEPOSIT + this.WHITHDRAW} demande(s) en attente`)
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
