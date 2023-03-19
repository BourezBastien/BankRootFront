import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {User} from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  async getToken(token: string) {

    const tokenSession = JSON.parse(token);

    const accessToken = tokenSession["access_token"];

    return accessToken;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.getToken(String(window.sessionStorage.getItem("Token"))),
    })
  };

  getUsers() {
    return this.http.get("/user", this.httpOptions);
  }

  createUser(user: User) {
    return this.http.post("/auth/register", user, this.httpOptions);
  }
}
