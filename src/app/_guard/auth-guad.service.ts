import {inject} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../_services/auth.service";
import {NotificationService} from "../_services/notification.service";

export const canActivate: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const notification = inject(NotificationService)

  if (!auth.getToken()) {
    router.navigateByUrl('/login');
    notification.openError("Erreur", "Veuillez vous authentifier")
    return false;
  }

  return true;
}