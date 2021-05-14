import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrls: ['./song-form.component.css'],
})
export class SongFormComponent implements OnInit {
  constructor() {}
  model!: Song;
  @Input() set data(song: Song) {
    if (!song) {
      song = new Song();
    }
    this.model = song;
  }
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  submit(audio: any, img: any): void {
    const formData = new FormData();
    // if the model have date its an update and if it doesn't its add
    if (!this.model.date) {
      this.model.date = new Date();
      if (!audio[0]) {
        alert('you must add audio file to a new song');
        return;
      }
      if (!img[0]) {
        alert('you must add image file to a new song');
        return;
      }
    } else {
      formData.append('audioSource', this.model.audioSource);
      formData.append('imgSource', this.model.imgSource);
    }
    const id = this.model.songId ? this.model.songId : 0;
    formData.append('image', img[0]);
    formData.append('audio', audio[0]);
    formData.append('name', this.model.name);
    formData.append('songId', id.toString());
    formData.append('description', this.model.description);
    try {
      formData.append('date', this.model.date.toJSON());
    } catch (err) {
      formData.append('date', this.model.date.toString());
    }
    this.submitEmitter.emit(formData);
  }
  ngOnInit(): void {}
}
