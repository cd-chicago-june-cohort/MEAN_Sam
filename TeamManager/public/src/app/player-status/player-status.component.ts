import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  num = 1
  changeNum(x){
    this.num = x;
  }
  constructor() { }

  ngOnInit() {
  }

}
