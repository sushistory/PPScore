import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
 
})

export class ScoreComponent implements OnInit {

  allData = [];
  resu: string;
  errData: string;
  name: string = "Deepak";

  constructor(private http: Http){

    /*
    http.get('localhost:8080/PPScore/score/get')
    // Call map on the response observable to get the parsed people object
    .map(res => res.json())
    // Subscribe to the observable to get the parsed people object and attach it to the
    // component
    .subscribe(result => alert(result));
    */

    const body = {"idGame" : "1"} 

    let headers = new Headers({ 
      'Content-Type': 'application/json',  
      'charset':'utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST, GET, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers':'content-type',  
    });

    let options = new RequestOptions({ headers: headers });

    let bodyString = JSON.stringify(body);
    this.http.post('http://localhost:8080/PPScore/score/get', bodyString, options)
    .subscribe(
      //(response) => {alert(response)}, //For Success Response
      (response) => {
        
      }, //For Success Response
      err => {console.error(err)} //For Error Response
  );    

  }

  
  ngOnInit() {

    //alert('hello') ;
    /*
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(value);
    this.http.post('127.0.0.1/myProject/insertData.php', body, headers)
                .subscribe(
                    () => {alert("Success")}, //For Success Response
                    err => {console.error(err)} //For Error Response
                );                
    }    */

  }



}

