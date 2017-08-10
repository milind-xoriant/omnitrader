import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  account_value: number = 5000;
  risk_percentage: number = 5;
  stock : Object = {
  	name: '',
  	ltp: '',
  }
  rt_values : Object = {
  	pctOfAV : 0, // Percentage profit of Account Value
  	pctOfTV : 0, // Percentage profit/loss of trade value
  }
  tradesignals : Array<Object> = [
  	{
  		symbol: 'ACC',
  		reason: 'Volume surge'
  	},
  	{
  		symbol: 'BANKINDIA',
  		reason: 'Pivot Reversal'
  	}
  ]
}
