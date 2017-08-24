import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-players',
  templateUrl: './manage-players.component.html',
  styleUrls: ['./manage-players.component.css']
})
export class ManagePlayersComponent implements OnInit {
  bool1 = true;
  bool2 = false;
  bolden(link){
    if (link=='link1'){
      this.bool2 = false;
      this.bool1 = true;
    } else {
      this.bool1 = false;
      this.bool2 = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
