import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../_services/api.service";
import {NotificationService} from "../../_services/notification.service";
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss'],
  imports: [BrowserModule, CommonModule]
})
export class AdminCardsComponent implements OnInit {
  requests!: any[];
  modal!: any;

  constructor(private apiservice: ApiService, private notificationService: NotificationService) {
  }

  DEPOSIT = 0;
  WITHDRAW = 0;

  async ngOnInit() {
    const requests = await this.getRequests();
    this.requests = requests;
    if (requests) {
      requests.map((item: any) => {
          if (item.type === "deposit") {
            this.DEPOSIT++
          } else if (item.type === "withdraw") {
            this.WITHDRAW++
          }
        }
      )
      return this.notificationService.openInfo("Demandes", `Vous avez ${this.DEPOSIT + this.WITHDRAW} demande(s) en attente`)
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

  openModal(type?: string) {

    // Get the modal
    this.modal = document.getElementById("myModal");

    this.requests.map((item) => {
      if (type === "deposit") {
        if (item.type != "deposit") return this.notificationService.openInfo("Information", "Aucune requête(s) de ce type!");
        this.modal.style.display = "flex";
      } else if (type === "withdraw") {
        if (item.type != "withdraw") return this.notificationService.openInfo("Information", "Aucune requête(s) de ce type!");
        this.modal.style.display = "flex";
      } else return this.notificationService.openError("Erreur", "Cette action ne dispose d'aucun type.");
    })

  }

  closeModal() {
    this.modal.style.display = "none";
  }

}
