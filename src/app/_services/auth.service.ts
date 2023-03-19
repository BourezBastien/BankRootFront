import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const AUTH_API = 'http://152.228.163.78:3000/auth/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(mail: string, password: string): Observable<any> {
    return this.http.post(
      "auth/login",
      {
        mail,
        password,
      },
      httpOptions
    );
  }
}