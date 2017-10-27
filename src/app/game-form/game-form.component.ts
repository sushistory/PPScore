import { Component, OnInit } from '@angular/core';
import { PPGame } from '../entities/PPGame' ; 
import { NgModel } from '@angular/forms' ;

import { Observable } from 'rxjs/Observable';

import { HttpParams } from '@angular/common/http' ;
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch' ;


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  //constructor() { }

  constructor(private http: Http){
    
       
      }
    

    ngOnInit() {

    this.initTheForm();

  }

  platforms = ['IOS', 'ANDROID'] ;

  game = new PPGame(null, "", "ANDROID") ;

  submitted = false ;

  onSubmit(){
  
    this.submitted = true ;

    this.game.id = null ;

    //const body = {"idGame" : "1"} 
    
    let headers = new Headers({ 'Content-Type': 'application/json',  'charset':'utf-8'});
    let options = new RequestOptions({ headers: headers });
    
    let bodyString = JSON.stringify(this.game);
    this.http.post('http://localhost:8080/PPScore/game/create', bodyString, options)
    .map(res => res.json()) // ...and calling .json() on the response to return data
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
    .subscribe(game => {
      this.game = game;
      alert('game created : ' + this.game.name) ; 

    })

    /*
    .subscribe(
        //(response) => {alert(response)}, //For Success Response
        (response) => {
          alert(response.json())
        }, //For Success Response
        err => {console.error(err)} //For Error Response
    );   */ 

  }

  initTheForm(){

    this.getGame(1) ;

  }

  updateGame(){
    
    alert('update');

  }

  getGame(id:number){

     
    //let headers = new Headers({ 'Content-Type': 'application/json',  'charset':'utf-8'});
    //let options = new RequestOptions({ headers: headers });
    
    //let params = new HttpParams();
    //params = params.append('id', id.toString()) ;

    //this.http.get('http://localhost:8080/PPScore/game/get', {params : params})
    this.http.get('http://localhost:8080/PPScore/game/get/'+id)
    .map(res => res.json())
    .subscribe(
        //(response) => {alert(response)}, //For Success Response
        (game) => {
          this.game = game;
          //alert(response.json())
        }, //For Success Response
        err => {console.error(err)} //For Error Response
    );    

  }

  newGame(){
    //this.game = new PPGame(1, "10 Bulletssss", this.platforms[1]) ;
  }

}


