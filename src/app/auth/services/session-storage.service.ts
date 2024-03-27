import {Injectable } from '@angular/core';
import { WindowRef } from './window-ref.service';

const TOKEN = 'SESSION_TOKEN'; // Use this constant for the session storage entry key
// Add your code here

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  constructor(private window: WindowRef) { }

  setToken(token: string){
    // Add your code here
    this.window.localStorage.setItem(TOKEN, token)
  }

  getToken(){
    // Add your code here
    return this.window.localStorage.getItem(TOKEN);
  }

  deleteToken(){
    // Add your code here
    this.window.localStorage.removeItem(TOKEN);
  }
}
