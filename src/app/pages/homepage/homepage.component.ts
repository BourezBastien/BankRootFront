import {Component, OnInit} from '@angular/core';
import {RESTAPIService} from '../../API/service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  data: any;

  constructor(private service: RESTAPIService) {
  }

  ngOnInit() {
    this.service.getUsers().subscribe((response) => {
      console.log(response)
      this.data = response;
    });
  }
}
