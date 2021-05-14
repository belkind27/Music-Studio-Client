import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comment-popup',
  templateUrl: './comment-popup.component.html',
  styleUrls: ['./comment-popup.component.css'],
})
export class CommentPopupComponent implements OnInit {
  @Input() set currentComment(comments: Comment[] | undefined) {
    if (comments) {
      if (comments.length === 0) {
        this.isShown = false;
      } else {
        this.isShown = true;
      }
      if (comments.length > 3) {
        this.innerCurrentComments = this.chooseRandomComment(comments);
      } else if (comments.length > 0) {
        this.innerCurrentComments = comments;
      }
    } else {
      this.isShown = false;
    }
  }
  innerCurrentComments!: Comment[];
  isShown!: boolean;

  constructor() {}

  ngOnInit(): void {}
  private chooseRandomComment(comments: Comment[]): Comment[] {
    while (comments.length > 3) {
      comments.splice(Math.floor(Math.random() * (comments.length - 1)), 1);
    }
    return comments;
  }
}
