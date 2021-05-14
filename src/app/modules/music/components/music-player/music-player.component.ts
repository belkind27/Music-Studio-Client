import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Song } from 'src/app/shared/models/song.model';
import { IsPlayerReadyService } from '../../services/is-player-ready.service';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css'],
})
export class MusicPlayerComponent implements OnInit {
  @Input() currentSong!: Song;
  @Output() commentEmitter: EventEmitter<number> = new EventEmitter();
  isPlaying!: boolean;
  isAudioBarShown!: boolean;
  isReady!: boolean;
  duration!: number;
  timePast!: number;
  constructor(private isReadyService: IsPlayerReadyService) {}

  ngOnInit(): void {
    this.isReady = false;
    this.isPlaying = false;
    this.isAudioBarShown = false;
    this.duration = this.timePast = 0;
    this.isReadyService.isReady.subscribe((res) => {
      this.onLoadingFinish(res);
    });
  }

  onLoadingFinish(isReady: boolean): void {
    setTimeout(() => {
      this.isReady = isReady;
    }, 0);
  }
  onAudioEnded(isEnded: boolean): void {
    if (isEnded) {
      this.isPlaying = false;
    }
  }
  getDuration(val: number): void {
    this.duration = val;
  }
  getTimePast(val: number): void {
    this.timePast = val;
    this.commentEmitter.emit(val);
  }
  btnClick(): void {
    if (this.isPlaying) {
      this.isPlaying = false;
      this.isAudioBarShown = false;
    } else {
      this.isPlaying = true;
      this.isAudioBarShown = true;
    }
  }
}
