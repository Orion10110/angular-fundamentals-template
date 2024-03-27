import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Observable, catchError, throwError } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // Add your code here
    constructor(private sessionStorage: SessionStorageService, private router: Router, private authService: AuthService ) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.sessionStorage.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        return next.handle(request).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error.status === 401) {
                    // Logout and redirect to login
                    this.authService.logout();
                    this.router.navigateByUrl('/login');
                }
                return throwError(() => error)
            })
        );
    }
}
