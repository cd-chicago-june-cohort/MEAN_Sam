import { Component, OnInit } from '@angular/core';
import { Player } from "../../player";
import { ManagerService } from '../../manager.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {
  ngOnInit(){
  }
  
  player = new Player()  

  constructor(private _managerService: ManagerService) { }

  createPlayer(){
    this._managerService.sendPlayer(this.player).then(response => console.log (response)).catch(err => console.log(err));
    this.player = new Player();
  }

  
}
