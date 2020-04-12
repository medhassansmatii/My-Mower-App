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
export class FicherLogComponent  {

 
  message: string;
  txtlog:string="Cliquer sur Afficher le Log";
 

	ngOnInit() { console.log(datax) ;}
	constructor(private http: HttpClient) {

	

		
	
  }
  deleteLog(){
		let url="http://127.0.0.1:8080/deletelog";
		this.http.delete(url).subscribe(
 			() =>this.txtlog="",
		      	(err) => {console.log(err); console.log("c");}
		    );	
	
	}

	getLog(){
		
		const httpOptions2 = {
		  headers: new HttpHeaders({
		    'Accept': 'text/plain,*/*',
		    'Access-Control-Allow-Headers': 'Content-Type',
		    'Content-Type': 'text/plain',
		  })
		};
		let url:string;
		url="http://127.0.0.1:8080/log";
		this.http.get(url,{ responseType: 'text' }).subscribe(
		      (res) => {console.log(res); this.txtlog=res;},
		      (err) => {console.log(err); this.txtlog="le fichier est vide ou introuvable"}
		    );	
	}

	
	

}
