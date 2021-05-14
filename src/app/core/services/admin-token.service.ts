import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminTokenService {
  private key = 'AdminToken';
  constructor() {}
  getToken(): string | null {
    return sessionStorage.getItem(this.key);
  }
  setToken(token: string): void {
    sessionStorage.setItem(this.key, token);
  }
}
