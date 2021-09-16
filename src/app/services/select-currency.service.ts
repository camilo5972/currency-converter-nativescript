import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICurrency } from '../interfaces/currency';

@Injectable()
export class SelectCurrencyService {

    private selectedCurrency = new BehaviorSubject({ position: null, currencySelected: null });

    public selectedCurrency$ = this.selectedCurrency.asObservable();
    
    constructor() {}

    public setSelectedCurrency(position: number, currencySelected: ICurrency) {
        this.selectedCurrency.next({ position, currencySelected });
    }
    
}