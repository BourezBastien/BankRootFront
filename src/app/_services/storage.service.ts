import {Injectable} from '@angular/core';

const USER_KEY = 'JWT_TOKEN';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() {
  }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user.access_token);
  }


  public isLoggedIn(): boolean {
    const token = window.sessionStorage.getItem(USER_KEY);
    if (token) {
      return true;
    }
    return false;
  }
}