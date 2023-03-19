import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators}
  from '@angular/forms';
import {ApiService} from "../../_services/api.service";
import {User} from '../../interfaces/User';
import {NotificationService} from "../../_services/notification.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private service: ApiService, private notificationService: NotificationService) {
  }

  form = new FormGroup({
    "firstname": new FormControl("", Validators.required),
    "lastname": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  async onSubmitRegister() {

    const user: User = {
      name: String(this.form.value.firstname),
      lastname: String(this.form.value.lastname),
      mail: String(this.form.value.email),
      password: String(this.form.value.password)
    }

    this.service.createUser(user).subscribe((response) => {
      try {
        this.notificationService.openSuccess("Succèes", "Votre compte a bien était crée", 5000)
        this.form.reset();
      } catch (e) {
        this.notificationService.openError("Erreur", "Une erreur est survenus lors de la création de votre compte", 5000)
        console.log(e);

      }
    });
  }

}
 