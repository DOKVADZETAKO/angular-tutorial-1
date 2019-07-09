import { Injectable } from '@angular/core';
import { data } from './rates';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  result;
  Observer;

  constructor() {
    this.result = this.transformObjectToArray(data.rates);

    this.Observer = {
      result: this.result,
      filter: this.filter,
      map: this.map,
      subscribe: this.subscribe
    }
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

  filter(cb) {
    this.result = this.result.filter(cb);
    return this
  }

  map(cb) {
    this.result = this.result.map(cb);
    return this
  }

  subscribe(next, complete) {
    let i = 0;

    for (const item of this.result) {
      setTimeout(() => {
        next(item);
      }, i * 100);
      i++;
    }

    setTimeout(() => {
      complete(this.result.length);
    }, i * 100);
    i++;
  }
}