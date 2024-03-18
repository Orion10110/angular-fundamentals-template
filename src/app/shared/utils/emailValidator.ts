import { AbstractControl } from "@angular/forms";

export const emailValidator = (control: AbstractControl) => {
    const email = control.value;
    if (!email) {
      return null;
    }
    const isValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    return isValid ? null : { emailValidator: true };
}