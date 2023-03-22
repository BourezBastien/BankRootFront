import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from "../_services/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authenticationService.getToken();
    if (user) {
      request = request.clone({
        setHeaders:
          {Authorization: `Bearer ${user}`}
      });
    }
    return next.handle(request);
  }
}