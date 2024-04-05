import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  login(form: NgForm) {
    console.log(form.value);
    console.log('Invalid ', form.invalid);

 
    form.setValue({username: '', password: ''});

  }
}
