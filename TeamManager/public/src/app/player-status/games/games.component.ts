import { Component, OnInit, Input } from '@angular/core';
import { ManagerService } from "../../manager.service";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  @Input() num;
  players;
  status;
  id;
  constructor(private _managerService: ManagerService) { }

  ngOnInit(){
    this.getPlayers();
  }

  getPlayers() {
    this._managerService.retrievePlayers()
      .then(players => this.players = players)
      .catch(err => console.log(err));
  }

  editPlayer(){
    console.log("trying to call editPlayer")
    this._managerService.updatePlayer(this.num, this.status, this.id).then(response => console.log (response)).catch(err => console.log(err));
  }

  play(i){
    console.log("play works")
    this.id = this.players[i]._id;
    this.status = 'Playing'
    this.editPlayer();
    console.log(this.id);
    this.getPlayers();
  }

  bench(i){
    this.id = this.players[i]._id;
    this.status = 'Benched'
    this.editPlayer();
    this.getPlayers();
  }

  undecide(i){
    this.id = this.players[i]._id;
    this.status = 'Undecided'
    this.editPlayer();
    this.getPlayers();
  }

}
