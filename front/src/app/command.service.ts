import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  private http: HttpClient;


  constructor(http: HttpClient) { 
    this.http=http;
  }
 
		

		url="http://127.0.0.1:8080/log";

  testmethod(){
    return "hi again";
  }
  readJsonData(){
    return this.http.get(this.url);
  }
}
