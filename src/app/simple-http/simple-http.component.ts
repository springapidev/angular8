import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.scss']
})
export class SimpleHttpComponent implements OnInit {
data: Object;
loading: boolean;
  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
makeHttpRequest(): void{
  this.loading=true;
  this._http.get('https://jsonplaceholder.typicode.com/posts/')
  .subscribe(data=>{
this.data=data;
this.loading=false;
  });
  
}
}
