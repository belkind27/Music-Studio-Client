import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css'],
})
export class PlaylistComponent implements OnInit {
  songsInner!: Song[];
  @Input() set songs(val: Song[]) {
    this.songsInner = val;
    if (this.songsInner) {
      this.currentSong = this.songsInner[0];
    }
  }
  @Input() currentSong!: Song;
  @Output() currentSongChange!: EventEmitter<Song>;
  constructor() {
    this.currentSongChange = new EventEmitter<Song>();
  }
  ngOnInit(): void {
    if (this.songsInner) {
      this.currentSong = this.songsInner[0];
    }
  }
  onSongChosen(song: Song): void {
    this.currentSong = song;
    this.currentSongChange.emit(song);
  }
}
