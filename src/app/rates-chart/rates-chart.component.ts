import {Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-rates-chart',
  templateUrl: './rates-chart.component.html',
  styleUrls: ['./rates-chart.component.css']
})
export class RatesChartComponent implements OnChanges {
  @Input() ratesData: any;
  @Input() currencies: string[] = [];

  multi: any[] = [];

  ngOnChanges(): void {
    if (!this.ratesData || !this.currencies) { return; }
    this.multi = this.currencies.map(currency => ({
      name: currency,
      series: this.ratesData.map(entry => ({name: entry.date, value: entry.rates[currency]})).reverse()
    }));
  }

  formatTick(tick): string {
    return tick.substr(tick.length - 2, 2) + '.' + tick.substr(tick.length - 5, 2);
  }
}
