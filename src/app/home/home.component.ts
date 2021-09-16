import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ICurrency } from '../interfaces/currency';
import { currencyList } from '../constants';
import { SelectCurrencyService } from '../services/select-currency.service';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  currencies: ICurrency[] = currencyList;
  send: ICurrency;
  receive: ICurrency;
  sendValue: number;
  receiveValue: number;

  constructor(private router: RouterExtensions, private selectCurrencyService: SelectCurrencyService) {}

  ngOnInit(): void {
    this.selectCurrencyService.selectedCurrency$.subscribe({ next: ({ position, currencySelected }) => {
      if (position === 0) {
        this.send = currencySelected;
      } else if (position === 1) {
        this.receive = currencySelected;
      }
    }});
  }

  onValueSendChange(event: any) {
    try {
      this.sendValue = event.value;
      if (!this.sendValue || !this.receive || !this.send) return;
      this.receiveValue = Number(((this.sendValue / this.send.factor) * this.receive.factor).toFixed(4));
    } catch(error: any) {
      console.trace(error);
    }
  }

  switchCurrency() {
    [this.sendValue, this.receiveValue] = [this.receiveValue, this.sendValue];
    [this.send, this.receive] = [this.receive, this.send];
  }

  selectCurrency(position: number) {
    this.router.navigate(['select-currency'], {
      state: {
        position,
        currencies: this.currencies
      }
    });
  }
}
