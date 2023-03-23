import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private notificationService: ToastrService) {
  }

  openWarning(details: string, summary: string) {
    this.notificationService.warning(summary, details);
  }

  openSuccess(details: string, summary: string) {
    this.notificationService.success(summary, details);
  }

  openError(details: string, summary: string) {
    this.notificationService.error(summary, details);
  }

  openInfo(details: string, summary: string) {
    this.notificationService.info(summary, details);
  }
}
