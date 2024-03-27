import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private readonly BASE_URL = 'http://localhost:4000';

    constructor(private http: HttpClient) {}

    getUser() {
        // Add your code here
        return this.http.get<any>(`${this.BASE_URL}/users/me`);
    }
}
