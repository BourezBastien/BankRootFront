import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {AuthService} from "../_services/auth.service";
import {NotificationService} from "../_services/notification.service";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private authentiationService: AuthService, private notificationService: NotificationService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((err: any) => {
      console.log("test", err)
      if (err.status === 401) {
        this.authentiationService.logout();
        this.notificationService.openError("Erreur", "Veuillez vérifier vos identifiants et ou permissions !")
      }
      if (err.status === 500) {
        this.authentiationService.logout();
        this.notificationService.openError("Erreur", "Veuillez vérifier vos identifiants !")
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}