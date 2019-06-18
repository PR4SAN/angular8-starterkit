import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setLocalStorage(key: string, data: string) {
    localStorage.setItem(key, data);
  }

  getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  deleteLocalStorage(key: string) {
    return localStorage.removeItem(key);
  }
}
