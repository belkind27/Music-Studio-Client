import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Note } from 'src/app/shared/models/note';

@Component({
  selector: 'app-note-display',
  templateUrl: './note-display.component.html',
  styleUrls: ['./note-display.component.css'],
})
export class NoteDisplayComponent implements OnInit {
  note!: Note;
  constructor(@Inject(MAT_DIALOG_DATA) data: Note) {
    this.note = data;
  }
  ngOnInit(): void {}
}
