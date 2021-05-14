import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';
import { titleColors } from 'src/app/shared/models/titleColors.model';

import { GetSongsService } from '../../services/get-songs.service';
import {
  PlaylistControlService,
  playlistEvents,
} from '../../services/playlist-control.service';

@Component({
  selector: 'app-music-main',
  templateUrl: './music-main.component.html',
  styleUrls: ['./music-main.component.css'],
  providers: [GetSongsService],
})
export class MusicMainComponent implements OnInit {
  @Output() isShow = new EventEmitter<boolean>();
  title = 'My Music';
  titleColor = titleColors.black;
  songs!: Song[];
  currentSong!: Song;
  constructor(
    private songService: GetSongsService,
    private playlistService: PlaylistControlService
  ) {}

  ngOnInit(): void {
    this.songService.getSongs().subscribe((songs) => {
      this.isShow.emit(songs.length !== 0 ? true : false);
      if (songs?.length !== 0) {
        this.songs = songs;
        this.currentSong = songs[0];
        this.playlistService.currentSongId = this.currentSong.songId;
      }
    });
    this.playlistService.on(playlistEvents.backwards, () => {
      if (this.playlistService.currentSongId !== 1) {
        this.playlistService.currentSongId -= 1;
        this.currentSong = this.songs[this.playlistService.currentSongId - 1];
      }
    });
    this.playlistService.on(playlistEvents.forward, () => {
      if (this.playlistService.currentSongId !== this.songs.length) {
        this.playlistService.currentSongId += 1;
        this.currentSong = this.songs[this.playlistService.currentSongId - 1];
      }
    });
  }
}
