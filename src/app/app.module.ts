import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ScoreComponent } from './score/score.component';
import { GameFormComponent } from './game-form/game-form.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameLeaderboardComponent } from './game-leaderboard/game-leaderboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ScoreComponent,
    GameFormComponent,
    GameListComponent,
    GameLeaderboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
