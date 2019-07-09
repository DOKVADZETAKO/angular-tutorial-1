import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  rates: Array<object> = [];
  length = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    const action = (value) => {
      this.rates.push(value)
    }

    const complete = () => {
      this.length = this.rates.length;
    };

    const filterCallback = ({ value }) => value > 2;
    const mapcallback = ({ currency, value }) => ({ currency, value, icon: 'i----' });

    const Observer = this.currencyService.Observer;

    Observer
      .pipe(
        filter(filterCallback),
        map(mapcallback)
      )
      .subscribe({
        next: action,
        complete
      });
  }

}
