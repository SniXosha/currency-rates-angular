import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ratesData: any;
  currencies: string[] = ['USD', 'EUR'];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.http
      .get('http://localhost:8080/rates?days=30')
      .subscribe(data => this.ratesData = data);
  }
}
