import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
//import { emailValidator } from 'src/app/shared/utils/email-validator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  domains = EMAIL_DOMAINS;
  login(form: NgForm) {

    if (form.invalid) {
      return;

      console.log(form.value);
      console.log('Invalid ', form.invalid);
    }
    console.log('logged in')
  

    // this.userService.login();
    // this.router.navigate(['/training']);
}
}
