import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/models/note';
import { GetNotesService } from '../../services/get-notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css'],
  providers: [GetNotesService],
})
export class NotesContainerComponent implements OnInit {
  notes!: Note[];
  constructor(private service: GetNotesService) {}

  ngOnInit(): void {
    this.service.getNotes().subscribe((res) => (this.notes = res));
  }
}
