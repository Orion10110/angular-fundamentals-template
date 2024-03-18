import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { emailValidator } from "../utils/emailValidator";

@Directive({
    selector: '[emailValidator]',
    providers: [/*Add your code here*/
    {
        provide: NG_VALIDATORS,
        useExisting: EmailValidatorDirective,
        multi: true,
      },]
})
export class EmailValidatorDirective implements Validator {
    // Add your code here
    validate(control: AbstractControl): ValidationErrors | null {
      return emailValidator(control)
    }
}
