import { Component, OnInit } from '@angular/core';
import { ManagerService } from './manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
