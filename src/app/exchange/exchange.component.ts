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
    console.log(value)
  }

  keyUp(value) {
    this.firstCurrencyValue = value;
  }

  onChange2(value) {
    this.currency2 = value;
  }

  exchange() {
    console.log(this.currency1 + ' ' + this.firstCurrencyValue + ' ' + this.currency2);
    if (this.currency1 && this.currency2) {
      const url = ` https://api.exchangeratesapi.io/latest?base=${this.currency1}&symbols=${this.currency2}`;
      this.http.get(url).subscribe(value => {
        this.updateSecondCurrencyValue(value);
      });
    }
  }

  updateSecondCurrencyValue(value) {
    const result = +Object.values(value.rates)
    this.secondCurrencyValue = this.firstCurrencyValue*result;
  }

}

