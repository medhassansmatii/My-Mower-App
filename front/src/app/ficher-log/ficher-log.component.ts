import { Component, Input, ElementRef,OnInit } from '@angular/core';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';

import datax  from  '../data.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Component({
  selector: 'app-ficher-log',
  templateUrl: './ficher-log.component.html',
  styleUrls: ['./ficher-log.component.css']
})
export class FicherLogComponent implements OnInit {

 

  etat=datax;
 

	ngOnInit() { console.log(datax) ;}
	constructor(private http: HttpClient) {}

	
	getLog(){
		let url:string;
		url="http://127.0.0.1:8080/log";
		this.http.get<any>(url).subscribe(
		      (res) => {console.log(res); },
		      (err) => {console.log(err);}
		    );	
	}

}
