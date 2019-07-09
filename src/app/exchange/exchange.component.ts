import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './../currency.service'

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit {
  currencies;
  
  constructor(private currencyService: CurrencyService ) { 
    this.currencies = currencyService.getcurrencies();
  }

  ngOnInit() {
  }

  onChange(value){
    console.log(value)
  }

}
