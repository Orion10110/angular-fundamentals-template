import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from '@app/shared/utils/emailValidator';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
})
export class RegistrationFormComponent {
  submitted = false;
  registrationForm!: FormGroup;
  // Use the names `name`, `email`, `password` for the form controls.
  constructor(private fb: FormBuilder) {
    this.buildForm();
 }

 buildForm(): void {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, emailValidator]],
      password: ["", Validators.required],
    });
  }

  onSubmit(): void {
    this.submitted = true
    console.log(this.registrationForm.value);
  }

  get name() { return this.registrationForm?.get('name'); }
  get email() { return this.registrationForm?.get('email'); }
  get password() { return this.registrationForm?.get('password'); }

}
