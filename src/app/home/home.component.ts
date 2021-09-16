import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'Home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  buy: number;
  sell: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchCurrency() {
    alert('entra');
  }

  selectCurrency(position: number) {
    alert('long ' + position);
  }
}
