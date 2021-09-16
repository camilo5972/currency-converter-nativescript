import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  buy: number;
  sell: number;

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
  }

  switchCurrency() {
    alert('entra');
  }

  selectCurrency(position: number) {
    this.router.navigate(['select-currency'], {
      state: {
        position
      }
    });
  }
}
