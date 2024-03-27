import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '@app/auth/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  @ViewChild("loginForm") public loginForm!: NgForm;

  constructor(private authService: AuthService) {
  }

  //Use the names `email` and `password` for form controls.
  public email = "";
  public password: string = "";

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
  }
}
