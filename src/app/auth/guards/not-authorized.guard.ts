import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NotAuthorizedGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
      ) {}

    // Add your code here
    canActivate() {
        return this.authService.isAuthorized$.pipe(
            map(isAuthorized => {
            if (!isAuthorized) {
                return true; // User is not authorized, allow navigation
            } else {
                // User is authorized, redirect to courses page
                return this.router.createUrlTree(['/courses']);
            }
            })
        );
    }
}
