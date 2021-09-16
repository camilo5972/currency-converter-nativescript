import { Component, OnInit } from '@angular/core'
import { ICurrency } from '../interfaces/currency';

@Component({
  selector: 'SelectCurrency',
  templateUrl: './select-currency.component.html',
})
export class SelectCurrencyComponent implements OnInit {

    currencies: ICurrency[] = [
        {
            name: 'European Union',
            conversion: '1 EUR = 1.0000 EUR',
            image: 'https://icons.iconarchive.com/icons/wikipedia/flags/1024/EU-European-Union-Flag-icon.png'
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

  
}
