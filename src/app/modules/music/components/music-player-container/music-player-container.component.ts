import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Song } from 'src/app/shared/models/song.model';
import { Comment } from 'src/app/shared/models/comment.model';
import { GetCommentsService } from '../../services/get-comments.service';

@Component({
  selector: 'app-music-player-container',
  templateUrl: './music-player-container.component.html',
  styleUrls: ['./music-player-container.component.css'],
  providers: [GetCommentsService],
})
export class MusicPlayerContainerComponent implements OnInit {
  song!: Song;
  @Input() set currentSong(val: Song) {
    this.comments = [];
    this.song = val;
    this.getComments();
  }
  comments!: Comment[] | undefined;
  currentComments: Comment[] | undefined;
  currentTime!: number;
  constructor(
    private service: GetCommentsService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getComments();
  }
  private getComments(): void {
    this.comments = this.song?.comments;
  }
  addComment(AddedComment: Comment): void {
    this.service
      .addComment({
        ...AddedComment,
        timeStamp: this.currentTime,
        date: new Date(),
        songId: this.song.songId,
      })
      .subscribe((comments) => {
        comments
          ? (this.comments = comments)
          : this.snackBar.open('Failed To Add Comment', 'Dismiss', {
              duration: 3500,
            });
      });
  }
  changeComment(sec: number): void {
    if (this.comments && this.currentTime !== sec) {
      this.currentComments = this.comments.filter((comment) => {
        return comment.timeStamp === sec;
      });
    }
    this.currentTime = sec;
  }
}
