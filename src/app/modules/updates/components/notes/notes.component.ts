import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DragScrollComponent } from 'ngx-drag-scroll';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { Note } from 'src/app/shared/models/note';
import { NoteDisplayComponent } from '../note-display/note-display.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  @Input() notes!: Note[];
  @ViewChild('noteScroll', { read: DragScrollComponent }) ds:
    | DragScrollComponent
    | undefined;
  resizeObservable$!: Observable<Event>;
  resizeSubscription$!: Subscription;
  noteW!: number;
  noteP!: number;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.resizeNote();
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.subscribe((_) => {
      this.resizeNote();
    });
  }
  moveLeft(): void {
    this.ds?.moveLeft();
  }
  moveRight(): void {
    this.ds?.moveRight();
  }
  openNoteDisplay(note: Note): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialog-note';
    dialogConfig.data = note;
    this.dialog.open(NoteDisplayComponent, dialogConfig);
  }
  resizeNote(): void {
    const idleWidth = 320;
    let divPad = 140;
    let notePadding = 4;
    if (window.innerWidth < 1750) {
      divPad = 130;
    }
    if (window.innerWidth < 1088) {
      divPad = 120;
    }
    console.log(window.innerWidth);

    const fixedWidth = window.innerWidth - divPad;
    if (fixedWidth < idleWidth * 2) {
      this.noteW = idleWidth;
      notePadding = (fixedWidth - idleWidth) / 2;
    } else {
      this.noteW =
        idleWidth -
        4 +
        (fixedWidth % idleWidth) /
          ((fixedWidth - (fixedWidth % idleWidth)) / idleWidth);
    }
    this.noteP = notePadding;
  }
}
