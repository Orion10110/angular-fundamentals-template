import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class WindowRef {
  public get localStorage(): Storage {
    return window.localStorage as unknown as Storage
  }
}