import { Component, OnInit } from '@angular/core';
import { PPGame } from '../entities/PPGame' ; 
import { NgModel } from '@angular/forms' ;

import { Observable } from 'rxjs/Observable';

import { HttpParams } from '@angular/common/http' ;
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch' ;

@Component({
  selector: 'app-game-leaderboard',
  templateUrl: './game-leaderboard.component.html',
  styleUrls: ['./game-leaderboard.component.css']
})
export class GameLeaderboardComponent implements OnInit {

  scores ;

  constructor(private http:Http) { }

  ngOnInit() {

      this.getTheScores(1);

  }



  getTheScores(idGame:number){

      const body = {"idGame" : "1"} 
    
      let headers = new Headers({ 'Content-Type': 'application/json',  'charset':'utf-8'});
      let options = new RequestOptions({ headers: headers });
      
      let bodyString = JSON.stringify(body);
      this.http.post('http://localhost:8080/PPScore/score/get', bodyString, options)
      .map(res => res.json())
      .subscribe(scores => this.scores = scores);
          

  }

}
