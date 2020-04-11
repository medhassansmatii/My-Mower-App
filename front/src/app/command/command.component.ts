import { Component, Input, ElementRef,OnInit } from '@angular/core';
//import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClientModule,HttpClient, HttpHeaders} from '@angular/common/http';
import { Command } from '../command';
import { Etat } from '../etat';
import datax  from  '../data.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  

  etat=datax;
 	Xfinal:number;
	Yfinal :number;
	directionFinale:string;

	ngOnInit() { console.log(datax) ;}
	constructor(private http: HttpClient) {}
	onSubmit() {
		console.log(datax) ;
	    	let url:string;
		url="http://127.0.0.1:8080/command";
		this.http.post<any>(url, datax ,httpOptions  ).subscribe(
		      (res) => {this.Xfinal=res.positionX;
				this.Yfinal=res.positionY;
				this.directionFinale=res.direction;
				
				 },
		      (err) => {console.log(err);}
		    );	
  	}
	
	
}
