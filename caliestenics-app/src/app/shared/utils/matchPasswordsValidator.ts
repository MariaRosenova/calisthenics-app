import { ValidatorFn } from "@angular/forms";


export function matchPasswordsValidator(
    passwordControlName: string,
    rePasswordControlName: string,
) : ValidatorFn {
    return (control) => {
        const passwordFormControl = control.get(passwordControlName);
        const rePassFormControl = control.get(rePasswordControlName);
        const areMatching = 
            passwordFormControl?.value == rePassFormControl?.value;

            return areMatching ? null : {matchPasswordsValidator : true};
     }
}