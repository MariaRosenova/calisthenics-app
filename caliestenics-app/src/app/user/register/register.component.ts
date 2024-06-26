import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { EMAIL_DOMAINS } from 'src/app/constants';
import { emailValidator } from 'src/app/shared/utils/email-validator';
import { matchPasswordsValidator } from 'src/app/shared/utils/matchPasswordsValidator';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(EMAIL_DOMAINS)]],
    username: ['', [Validators.required, Validators.minLength(6)]],
    passGroup: this.fb.group(
      {
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]]
      },
      {
        validators : [matchPasswordsValidator('password', 'rePassword')],
      }
  )
  });
  get passGroup() {
    return this.form.get('passGroup');
  }

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  register(): void {
    if (this.form.invalid) {
      return;
    }

    const {
      email, 
      username, 
      passGroup: {password, rePassword} = {}} = this.form.value;

    this.userService.register(
      email!, 
      username!, 
      password!, 
      rePassword!
    ).subscribe(() => {
      this.router.navigate(['/training']);
    })
}
}
