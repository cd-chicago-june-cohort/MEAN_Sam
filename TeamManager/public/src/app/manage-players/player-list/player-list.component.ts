import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players
  constructor(private _managerService: ManagerService) { }

  ngOnInit(){
    this.getPlayers();
  }
  
  getPlayers() {
    this._managerService.retrievePlayers()
      .then(players => this.players = players)
      .catch(err => console.log(err));
  }
}
