import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, catchError, finalize, tap, throwError } from 'rxjs';
import { SessionStorageService } from './session-storage.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly BASE_URL = 'http://localhost:4000';
    private isAuthorized$$: BehaviorSubject<boolean>;
    public isAuthorized$: Observable<boolean>;

    constructor(private router: Router, private http: HttpClient, private sessionStorageService: SessionStorageService) {
        this.isAuthorized$$ = new BehaviorSubject<boolean>(false);
        this.isAuthorized$ = this.isAuthorized$$.asObservable();
        const storedIsAuthorized = this.sessionStorageService.getToken();
        if (storedIsAuthorized !== null) {
            this.isAuthorized$$.next(true);
        }
      }

    login(user: any) { // replace 'any' with the required interface
        // Add your code here
        const loginUrl = this.getLoginUrl()
        return this.http.post<any>(loginUrl, user)
        .pipe(
            catchError((error) => { console.log(error)
                return  throwError(() => error)
            })
          ).subscribe(
            response => {
                if (response && response.result) {
                  console.log(response)
                  this.sessionStorageService.setToken(response.result);
                  this.isAuthorized$$.next(true);
                  this.router.navigateByUrl('/courses');
                }
            }
          );
    }

    logout() {
        // Add your code here
        this.sessionStorageService.deleteToken();
        this.isAuthorized$$.next(false);
    }

    register(user: any) { // replace 'any' with the required interface
        // Add your code here
        console.log('st', user, `${this.BASE_URL}/register`, this.http.post)
        return this.http.post<any>(`${this.BASE_URL}/register`, user).pipe(
            catchError((error) => { console.log(error)
                return  throwError(() => error)
            })
          ).subscribe(
            response => {
              this.router.navigateByUrl('/login');
              // Handle successful response
              console.log('Response:', response);
            }
          );
        
    }

    get isAuthorised() {
        // Add your code here. Get isAuthorized$$ value
        return this.isAuthorized$$.value;
    }

    set isAuthorised(value: boolean) {
        // Add your code here. Change isAuthorized$$ value
        this.isAuthorized$$.next(value);
    }

    getLoginUrl() {
        // Add your code here
        return `${this.BASE_URL}/login`;
    }
}
