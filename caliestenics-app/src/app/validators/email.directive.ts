import { Directive, Input } from '@angular/core';
import { AbstractControl, ValidationErrors,   NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../shared/utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})
export class EmailDirective {
@Input() appEmail: string[] = [];

  constructor() { }
  
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    const validatorFn = emailValidator(this.appEmail);
    return validatorFn(control);
  }
}
