import { Component, OnInit } from '@angular/core';
import { PPGame } from '../entities/PPGame' ; 
import { NgModel } from '@angular/forms' ;

import { Observable } from 'rxjs/Observable';

import { HttpParams } from '@angular/common/http' ;
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch' ;

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games ;

  constructor(private http:Http) { }

  ngOnInit() {

  this.getAllItems();

  }



  getAllItems(){

    /*
    let headers = new Headers({ 
      'Content-Type': 'application/json',  
      'charset':'utf-8',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'POST, GET, DELETE, PUT, OPTIONS',
      'Access-Control-Allow-Headers':'content-type',  
    });

    let options = new RequestOptions({ headers: headers });
    */

    this.http.get('http://localhost:8080/PPScore/game/get')
    .map(res => res.json())
    .subscribe(games => this.games = games);

    /*
    this.http.get('http://localhost:8080/PPScore/game/get')
    .map(res => res.json())
    .subscribe(
        //(response) => {alert(response)}, //For Success Response
        (res) => {
          //this.game = game;
          //alert(response.json())
        }, //For Success Response
        err => {console.error(err)} //For Error Response
    );  */  

  }

}
