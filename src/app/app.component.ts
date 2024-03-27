import { Component } from '@angular/core';
import { Course } from './types';
import { Observable } from 'rxjs';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'courses-app';
  isAuthorized$: Observable<boolean>;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuthorized$ = this.authService.isAuthorized$
  }

  onLogout() {
    this.authService.logout()
    this.router.navigateByUrl('/login');
  }
}
