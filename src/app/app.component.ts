import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showTable = true;
  ratesData: any;
  currencies: string[] = ['USD', 'EUR'];

  constructor(
    private http: HttpClient
  ) {}

  switchView(): void {
    this.showTable = !this.showTable;
  }

  ngOnInit(): void {
    this.http
      .get('http://localhost:8080/ratesForMonth')
      .subscribe(data => this.ratesData = data);
  }
}
