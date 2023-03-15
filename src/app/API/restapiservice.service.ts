import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RESTAPIService {
  private BaseUrl = "http://152.228.163.78:3000/";

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getUsers() {
    return this.http.get(this.BaseUrl + "/user", this.httpOptions);
  }
}