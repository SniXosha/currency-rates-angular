import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-rates-table',
  templateUrl: './rates-table.component.html',
  styleUrls: ['./rates-table.component.css']
})
export class RatesTableComponent implements OnChanges {
  @Input() ratesData: any;
  @Input() currencies: string[] = [];

  rates: RatesForDate[];
  columns: string[] = [];
  maxValues: number[];
  minValues: number[];

  ngOnChanges(): void {
    if (!this.ratesData || !this.currencies) { return; }
    this.rates = this.ratesData.map(entry => ({
      date: entry.date,
      rates: this.currencies.map(currency => ({currency, value: entry.rates[currency]}))
    }));
    this.columns = ['date', ...this.currencies];
    this.maxValues = this.calculateStatistic(Math.max);
    this.minValues = this.calculateStatistic(Math.min);
  }

  chooseColor(value, index): string {
    if (!this.maxValues || !this.minValues) { return 'white'; }
    if (this.maxValues[index] === value) { return '#73c7af'; }
    if (this.minValues[index] === value) { return '#e6576a'; }
    return 'white';
  }

  calculateStatistic(func): number[] {
    return this.currencies.map((_, ind) => func(...this.rates.map(rate => rate.rates[ind].value)));
  }
}

interface Rate {
  currency: string;
  value: number;
}

interface RatesForDate {
  date: string;
  rates: Rate[];
}
