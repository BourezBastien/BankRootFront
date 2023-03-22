import {Component} from '@angular/core';
import {ApiService} from "../../_services/api.service";

@Component({
  standalone: true,
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.scss']
})
export class AdminCardsComponent {


  constructor(private apiservice: ApiService) {
  }

}
