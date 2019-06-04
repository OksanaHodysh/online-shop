import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getItem(key: string) {
    return JSON.parse(window.localStorage.getItem(key));
  }

  setItem(key: string, value): void {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }
}
