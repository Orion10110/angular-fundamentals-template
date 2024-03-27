import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad  {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    // Add your code here
    canLoad(route: Route, segments: UrlSegment[]) {
        return this.authService.isAuthorized$.pipe(
            map(isAuthorized => {
              if (isAuthorized) {
                return true;
              } else {
                return this.router.createUrlTree(['/login']);
              }
            })
          );
    }
}
