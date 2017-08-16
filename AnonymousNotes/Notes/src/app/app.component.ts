import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from "./note";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _noteService: NoteService) {}
  notes;
  note = new Note()

  createNote(){
    console.log(this.note);
    this._noteService.sendNote(this.note).then(response => console.log (response)).catch(err => console.log(err));
    this.getNotes()
    this.note = new Note();
  }


  ngOnInit(){
    this.getNotes();
  }
  getNotes() {
    this._noteService.retrieveNotes()
      .then(notes => this.notes = notes)
      .catch(err => console.log(err));
  }
}
