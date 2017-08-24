import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { PlayerFormComponent } from './manage-players/player-form/player-form.component';
import { GamesComponent } from './player-status/games/games.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
const routes: Routes = [
  {
    path: 'manage',
    component: ManagePlayersComponent,
    children: [
      {path: 'list', component: PlayerListComponent},
      {path: 'form', component: PlayerFormComponent}
    ]
  },
  {
    path: 'status',
    component: PlayerStatusComponent,
    children: [
      {path: 'game', component: GamesComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
