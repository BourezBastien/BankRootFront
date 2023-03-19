import {NgToastService} from "ng-angular-popup";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ToastNotifications {


  constructor(private notificationService: NgToastService) {
  }


  openWarning(details: string, summary: string, duration: number) {
    this.notificationService.warning({
      detail: details,
      summary: summary,
      duration: duration,
      sticky: true,
      position: 'tr'
    })
  }

  openSuccess(details: string, summary: string, duration: number) {
    this.notificationService.success({
      detail: details, summary: summary, duration: duration, sticky: true,
      position: 'br'
    })
  }

  openError(details: string, summary: string, duration: number) {
    this.notificationService.error({
      detail: details, summary: summary, duration: duration, sticky: true,
      position: 'tr'
    })
  }

  openInfo(details: string, summary: string, duration: number) {
    this.notificationService.info({
      detail: details, summary: summary, duration: duration, sticky: true,
      position: 'tr'
    })
  }
}