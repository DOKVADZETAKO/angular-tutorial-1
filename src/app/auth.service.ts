import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access = false;
  private isAuthorized = false;

  constructor() { }

  isEnabled(){
    return this.access;
  }

  disallow(){
    this.access = false;
  }

  allow(){
    this.access = true;
  }
}
