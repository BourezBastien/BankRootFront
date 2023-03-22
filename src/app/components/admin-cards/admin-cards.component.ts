import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../_services/api.service";

@Component({
  standalone: true,
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent implements OnInit {

  requests!: any

  constructor(private apiservice: ApiService) {
  }

  ngOnInit() {

    this.apiservice.getRequests().subscribe((requests) => {
      this.requests = requests
    })
  }
}
