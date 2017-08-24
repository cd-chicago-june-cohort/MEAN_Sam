import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { PlayerFormComponent } from './manage-players/player-form/player-form.component';
import { GamesComponent } from './player-status/games/games.component';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';
import {ManagerService} from './manager.service';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerFormComponent,
    GamesComponent,
    ManagePlayersComponent,
    PlayerStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
