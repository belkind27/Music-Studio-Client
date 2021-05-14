import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import { AudioDrawService } from '../../services/audio-draw.service';
import { IsPlayerReadyService } from '../../services/is-player-ready.service';
import {
  PlaylistControlService,
  playlistEvents,
} from '../../services/playlist-control.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  providers: [AudioDrawService],
})
export class PlayerComponent implements OnInit, AfterViewInit {
  isCanvasReady!: boolean;
  songPathInner: string | undefined;
  isReplay!: boolean;
  @Input() set songPath(val: string | undefined) {
    if (val) {
      this.songPathInner = val;
      this.isCanvasReady = false;
      this.isReadyService.emit(false);
    }
  }
  @Input() songName: string | undefined;
  @Input() isAudioBarShown!: boolean;
  isPlayingInner!: boolean;
  @Input() set isPlaying(val: boolean) {
    this.isPlayingInner = val;
    this.isPlayingInner ? this.play() : this.stop();
  }
  @ViewChild('audio')
  audioPlayerRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('canvas')
  waveCanvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('backGround')
  backgroundCanvas!: ElementRef<HTMLCanvasElement>;
  @Output() durationEmitter: EventEmitter<number> = new EventEmitter();
  @Output() timePastEmitter: EventEmitter<number> = new EventEmitter();
  @Output() isEndedEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() isPlayingChange: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private playerService: AudioDrawService,
    private playlistService: PlaylistControlService,
    private isReadyService: IsPlayerReadyService
  ) {
    this.isReplay = false;
  }
  ngAfterViewInit(): void {
    this.playerService.WaveCanvas = this.waveCanvasRef;
    this.playerService.backgroundCanvas = this.backgroundCanvas;
    this.waveCanvasRef.nativeElement.addEventListener('mousedown', (e) => {
      this.audioPlayerRef.nativeElement.currentTime =
        this.playerService.handleCanvasClick(
          e,
          this.audioPlayerRef.nativeElement.duration
        );
    });
    this.waveCanvasRef.nativeElement.addEventListener('mouseout', () => {
      this.playerService.colorBackGround();
    });
    this.waveCanvasRef.nativeElement.addEventListener('mousemove', (e) => {
      this.playerService.hoverBackGround(e);
    });
    this.audioPlayerRef.nativeElement.addEventListener(`loadeddata`, () => {
      if (this.songPathInner) {
        this.playerService.generatePlayer(
          this.songPathInner,
          this.audioPlayerRef.nativeElement.duration
        );
        this.playerService.playerReady.subscribe((res) => {
          this.isCanvasReady = res;
          this.isReadyService.emit(res);
          if (this.isReplay) {
            this.play();
          } else {
            this.isPlayingInner = false;
            this.isPlayingChange.emit(false);
          }
          this.durationEmitter.emit(
            this.playerService.initTimeSpans(
              this.audioPlayerRef.nativeElement.duration
            )
          );
        });
      }
    });
    this.audioPlayerRef.nativeElement.addEventListener(`ended`, () => {
      if (this.isReplay) {
        this.nextSong();
      } else {
        this.playerService.redraw();
        this.audioPlayerRef.nativeElement.currentTime = 0;
        this.isEndedEmitter.emit(true);
      }
    });
    this.audioPlayerRef.nativeElement.addEventListener('timeupdate', () => {
      this.playerService.handleTimeChange(
        this.audioPlayerRef.nativeElement.currentTime,
        this.audioPlayerRef.nativeElement.duration
      );
      this.timePastEmitter.emit(
        this.playerService.initTimeSpans(
          this.audioPlayerRef.nativeElement.currentTime
        )
      );
    });
    this.audioPlayerRef.nativeElement.addEventListener('play', () => {
      this.playerService.play();
      this.isPlayingInner = true;
      this.isPlayingChange.emit(true);
    });
    this.audioPlayerRef.nativeElement.addEventListener('pause', () => {
      this.playerService.stop();
      this.isPlayingInner = false;
      this.isPlayingChange.emit(false);
    });
  }

  ngOnInit(): void {}

  play(): void {
    this.audioPlayerRef.nativeElement.play();
  }
  stop(): void {
    if (this.audioPlayerRef) {
      this.audioPlayerRef.nativeElement.pause();
    } else {
      this.playerService.stop();
    }
  }
  nextSong(): void {
    this.stop();
    setTimeout(() => {
      this.playlistService.emit(playlistEvents.forward);
    }, 0);
  }
  prevSong(): void {
    this.stop();
    setTimeout(() => {
      this.playlistService.emit(playlistEvents.backwards);
    }, 0);
  }
  btnClick(): void {
    this.isPlayingInner ? this.stop() : this.play();
  }
}
