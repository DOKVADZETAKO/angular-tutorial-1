import { Injectable } from '@angular/core';
import { data } from './rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  result;

  constructor() {
    this.result = data.rates;
  }

  subscribe(next, complete) {
    const keys = Object.keys(this.result);
    let i = 0;

    for (const key of keys) {
      const value = this.result[key];
      const item = {
        currency: key,
        value
      };

      setTimeout(() => {
        next(item);
      }, i * 100);
      i++;
    }

    setTimeout(() => {
      complete(keys.length);
    }, i * 100);
    i++;
  }
}