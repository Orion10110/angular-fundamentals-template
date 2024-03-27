import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionStorageService } from "./services/session-storage.service";
import { AuthService } from "./services/auth.service";
import { HttpClientModule } from '@angular/common/http';
import { WindowRef } from './services/window-ref.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    WindowRef,
    SessionStorageService,
    AuthService,
  ]
})
export class AuthModule { }
