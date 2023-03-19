import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../_services/api.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {
  }

  ngOnInit(): void {
  }

  async getUsers() {
    const users = await this.service.getUsers();
    return users;
  }
}
