import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class ManagerService {

  constructor(private _http: Http) { }

  retrievePlayers(){
    return this._http.get('/api/show').map(data => data.json() ).toPromise();
  }

  sendPlayer(player){
    return this._http.post('/api/create', player).map(data => data.json()).toPromise();
  }

  updatePlayer(gamenum,status,playerID){
    let context = {
      'gamenum': gamenum,
      'status': status,
      'id': playerID
    }
    return this._http.post('/api/update', context).map(data => data.json()).toPromise();
  }

}
