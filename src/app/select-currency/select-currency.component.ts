import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';
import { ICurrency } from '../interfaces/currency';
import { SelectCurrencyService } from '../services/select-currency.service';

@Component({
  selector: 'SelectCurrency',
  templateUrl: './select-currency.component.html',
})
export class SelectCurrencyComponent implements OnInit {

    currencies: ICurrency[];
    position: number;

    constructor(private router: RouterExtensions, private selectCurrencyService: SelectCurrencyService) {}

    ngOnInit(): void {
        const state = this.router.router.getCurrentNavigation().extras.state;
        this.currencies = state.currencies;
        this.position = state.position;
    }

    selectCurrency(index: number) {
        this.selectCurrencyService.setSelectedCurrency(this.position, this.currencies[index]);
        this.router.back();
    }

}
