import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {RatesTableComponent} from './rates-table/rates-table.component';
import {MatButtonModule} from '@angular/material/button';
import {RatesChartComponent} from './rates-chart/rates-chart.component';
import {LineChartModule} from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    RatesTableComponent,
    RatesChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    LineChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
