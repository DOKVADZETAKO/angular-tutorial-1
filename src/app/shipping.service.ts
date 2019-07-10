import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  type;

  constructor(private http: HttpClient) { }

  getShippingCosts() {
    return this.http.get('/assets/shipping.json')
  }

  setShipping(value){
    this.type = value
  }

  gettype(){
    return this.type
  }
}
