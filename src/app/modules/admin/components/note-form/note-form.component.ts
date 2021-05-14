import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css'],
})
export class NoteFormComponent implements OnInit {
  constructor() {}
  model!: Note;
  @Input() set data(note: Note) {
    if (!note) {
      note = new Note();
    }
    this.model = note;
  }
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  submit(): void {
    if (!this.model.date) {
      this.model.date = new Date();
    }
    this.submitEmitter.emit(this.model);
  }
  ngOnInit(): void {}
}
