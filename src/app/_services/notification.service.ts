import {Injectable} from '@angular/core';
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private notificationService: NgToastService) {
  }

  openWarning(details: string, summary: string, duration: number) {
    this.notificationService.warning({
      detail: details,
      summary: summary,
      duration: duration,
      position: 'tr'
    })
  }

  openSuccess(details: string, summary: string, duration: number) {
    this.notificationService.success({
      detail: details, summary: summary, duration: duration,
      position: 'tr'
    })
  }

  openError(details: string, summary: string, duration: number) {
    this.notificationService.error({
      detail: details, summary: summary, duration: duration,
      position: 'tr'
    })
  }

  openInfo(details: string, summary: string, duration: number) {
    this.notificationService.info({
      detail: details, summary: summary, duration: duration,
      position: 'tr'
  })
  }
}
