import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';
import { Observable, map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    // Add your code here
    constructor(private userStoreService: UserStoreService, private router: Router) {}

    canActivate() {
      return this.userStoreService.isAdmin$.pipe(
        map(isAdmin => {
        console.log('s', isAdmin)
          if (isAdmin) {
            return true;
          } else {
            // Redirect to /courses if user is not admin
            return this.router.createUrlTree(['/courses']);
          }
        })
      );
    }
}
