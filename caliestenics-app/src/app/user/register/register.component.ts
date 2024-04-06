import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  domains = EMAIL_DOMAINS;

  register(form: NgForm) {
    if(form.invalid) {
      return;
    }
    console.log(form.value);
    console.log('successful registered user')
  }
}
