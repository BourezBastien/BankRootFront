import {Component, OnInit} from '@angular/core';
import {StorageService} from "../../_services/storage.service";
import {AuthService} from "../../_services/auth.service";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NotificationService} from "../../_services/notification.service";
import {CommonModule} from "@angular/common";


@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, RouterLink, RouterLinkActive]
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router, private notifService: NotificationService) {
  }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  logout(): any {
    this.storageService.clean();
    this.notifService.openSuccess("Succèes", "Vous avez était déconnecter", 5000);
    return this.router.navigateByUrl('/');

  }

}
