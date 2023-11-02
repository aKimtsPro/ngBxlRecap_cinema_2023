import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LOGIN_FORM} from "./login.form";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;
  invalidCreds: boolean = false;

  constructor(
    builder: FormBuilder,
    private router: Router,
    private readonly $authServ: AuthService,
  ) {
    this.form = builder.group( LOGIN_FORM )
  }

  onSubmit() {
    if( this.form.valid ){
      const success = this.$authServ.connect( this.form.value.username, this.form.value.password );
      if( success ){
        this.router.navigateByUrl('/home')
      }
      else {
        this.invalidCreds = true;
        this.form.reset();
      }
    }
  }
}
