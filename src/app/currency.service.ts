import { Injectable } from '@angular/core';
import { data } from './rates';
import { from } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  result;
  Observer;

  constructor() {
    this.result = this.transformObjectToArray(data.rates);

    this.Observer = from(this.result);
  }

  transformObjectToArray(object) {
    const result = []
    const keys = Object.keys(object);
    for (const key of keys) {
      const value = object[key];
      const item = {
        currency: key,
        value
      };
      result.push(item);
    }

    return result
  }

  subscribe(next, complete) {
    let i = 0;
    console.log('it\' does not execute')

    for (const item of this.result) {
      setTimeout(() => {
        next(item);
      }, i * 100);
      i++;
    }

    setTimeout(() => {
      complete();
    }, i * 100);
    i++;
  }
}