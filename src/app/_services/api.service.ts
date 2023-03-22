import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getUsers() {
    return this.http.get("/user", this.httpOptions);
  }

  createUser(user: User) {
    return this.http.post("/auth/register", user, this.httpOptions);
  }

  getRequests() {
    return this.http.get("/account-request/all", this.httpOptions);
  }
}
