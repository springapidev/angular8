import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-more-http',
  templateUrl: './more-http.component.html',
  styleUrls: ['./more-http.component.scss']
})
export class MoreHttpComponent implements OnInit {
data: Object;
loading: boolean;

  constructor(private _http : HttpClient) { }

  ngOnInit() {
  }
makepost(): void{
  this.loading=true;
  this._http.post('https://jsonplaceholder.typicode.com/posts',JSON.stringify({
body: 'This is posted by Rajaul Islam, Bangladesh',
title:'This is Rajaul, Full Stack Developer',
userId:1
  })).subscribe(data => {
    this.data = data;
    this.loading = false;
  }); 
}

makeHttpDelete():void{
  this.loading = true;
  this._http.delete('https://jsonplaceholder.typicode.com/posts/1')
  .subscribe(data => {
this.data = data;
this.loading = false;
  });
}

makeHttpHeaders():void{
  const headers: HttpHeaders =new HttpHeaders({
    'X-API-TOKEN':'ng-book'
  });
  const req = new HttpRequest(
    'GET',
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      headers : headers
    }

  );
  this._http.request(req).subscribe(data => {
this.data =data['body'];
  });
}



}
