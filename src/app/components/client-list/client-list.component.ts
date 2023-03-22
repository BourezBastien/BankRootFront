import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../_services/api.service';
import {Router} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss'],
  imports: [CommonModule]
})
export class ClientListComponent implements OnInit {
  items: any[] = [];
  pageSize = 8;
  currentPage = 1;
  totalPages = 5;
  paginatedItems: any[] = [];
  pages: number[] = [];

  constructor(private apiservice: ApiService, private router: Router) {
  }

  ngOnInit() {

    this.apiservice.getUsers().subscribe((response: any) => {
      this.paginatedItems = response;
      this.items = response;

      this.totalPages = Math.ceil(this.items.length / this.pageSize);

      this.paginatedItems = this.items.slice(0, this.pageSize);


      this.calculatePageNumbers();

      this.goToPage(1);
    })
  }


  calculatePageNumbers() {
    // Calculer les numéros des pages affichées dans la pagination
    this.pages = [];
    const startPage = Math.max(1, this.currentPage - 5);
    const endPage = Math.min(this.totalPages, this.currentPage + 5);
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    const startIndex = (page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.items.length - 1);
    this.paginatedItems = this.items.slice(startIndex, endIndex + 1);
    this.pages = [];
    const startPage = Math.max(1, page - 5);
    const endPage = Math.min(this.totalPages, page + 5);
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }
}
