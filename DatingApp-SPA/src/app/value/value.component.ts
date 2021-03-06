import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FunctionCall } from '@angular/compiler';

@Component({
  selector: 'app-value' ,
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
  isavalible = false;
  month = ['Jan', 'Feb'];

  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => {
      this.values = response;
    }, error => {
      console.log(error) ;
    });
  }
}
