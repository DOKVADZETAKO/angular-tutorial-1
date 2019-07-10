import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service'
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies;
  firstCurrencyValue: number;
  secondCurrencyValue: number;
  currency1;
  currency2;
  Observer;
  rates;
  test1;
  test2;
  constructor(private currencyService: CurrencyService,
    private http: HttpClient,
    private formBuilder: FormBuilder) {
    this.currencies = currencyService.getcurrencies();
    this.Observer = new Observable(this.exchange);
  }

  ngOnInit() {

  }

  onChange(value) {
    this.currency1 = value;
  }

  keyUp(value) {
    this.firstCurrencyValue = value;
  }

  keyUp2(value) {
    this.secondCurrencyValue = value;
  }

  onChange2(value) {
    this.currency2 = value;
  }

  change1() {
    this.test1 = true;
    this.test2 = false;
  }

  change2() {
    this.test2 = true;
    this.test1 = false;
  }

  exchange() {
    if (this.currency1 && this.currency2) {
      if (this.test1) {
        const url = ` https://api.exchangeratesapi.io/latest?base=${this.currency1}&symbols=${this.currency2}`;
        this.http.get(url).subscribe(value => {
          this.updateSecondCurrencyValue(value);
        });
      } else if (this.test2) {
        const url = ` https://api.exchangeratesapi.io/latest?base=${this.currency2}&symbols=${this.currency1}`;
        this.http.get(url).subscribe(value => {
          this.updateFirstCurrencyValue(value);
        });
      }

    }
  }

  updateSecondCurrencyValue(value) {
    const result = +Object.values(value.rates)
    this.secondCurrencyValue = this.firstCurrencyValue * result;
  }
  updateFirstCurrencyValue(value) {
    const result2 = +Object.values(value.rates)
    this.firstCurrencyValue = this.secondCurrencyValue * result2;
  }
}

