import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators}
  from '@angular/forms';
import {AuthService} from '../../_services/auth.service';
import {StorageService} from '../../_services/storage.service';
import {NotificationService} from "../../_services/notification.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  isLoggedIn = false;

  constructor(private notificationService: NotificationService, private authService: AuthService, private storageService: StorageService, private router: Router) {
  }

  ngOnInit(): any {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      return this.router.navigateByUrl('/admin');
    }
  }

  form = new FormGroup({
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  async onSubmitLogin() {

    const {email, password} = this.form.value;

    this.authService.login(email || "", password || "").subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.router.navigateByUrl('/admin');
        this.notificationService.openSuccess("Succès", "Connexion réussite", 5000)

      },
      error: err => {
        console.log(err);
        this.notificationService.openError("Erreur", "une erreur est survenue, veuillez réessayer", 5000)
      }
    });
  }

}
