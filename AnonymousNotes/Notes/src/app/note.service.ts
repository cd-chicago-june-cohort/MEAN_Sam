import { Injectable } from '@angular/core';
import {Http} from '@angular/http'
import 'rxjs'
import {NotesComponent} from './notes/notes.component'

@Injectable()
export class NoteService {

  constructor(private _http: Http) { }
  retrieveNotes(){
    return this._http.get('/api/show').map(data => data.json() ).toPromise();
  }

  sendNote(note){
    return this._http.post('/create', note).map(data => data.json()).toPromise();
  }

}
