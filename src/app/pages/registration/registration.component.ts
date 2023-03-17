import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators}
  from '@angular/forms';
import {RESTAPIService} from "../../API/service.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private service: RESTAPIService) {
  }


  form = new FormGroup({
    "firstname": new FormControl("", Validators.required),
    "lastname": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  onSubmitRegister() {
    const user = {
      name: this.form.value.firstname,
      lastname: this.form.value.lastname,
      mail: this.form.value.email,
      password: this.form.value.password
    }
    console.log(JSON.stringify(user));
    this.service.createUser(JSON.stringify(user)).subscribe((response) => console.log(response))
    /*console.log("identifiant", this.form.value);*/
  }

}
 