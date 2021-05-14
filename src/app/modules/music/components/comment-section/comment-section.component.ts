import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css'],
})
export class CommentSectionComponent implements OnInit {
  isEmoji!: boolean;
  newComment!: Comment;
  emojiPickerBottom!: string;
  emojiPickerRight!: string;
  @Output() newCommentEmitter!: EventEmitter<Comment>;
  constructor() {
    this.newComment = new Comment();
    this.newComment.content = '';
    this.newCommentEmitter = new EventEmitter<Comment>();
    this.emojiPickerRight = '-1vw';
    this.emojiPickerBottom = '6vh';
  }

  ngOnInit(): void {
    this.isEmoji = false;
  }
  emojiBtnClick(): void {
    this.isEmoji ? (this.isEmoji = false) : (this.isEmoji = true);
  }
  addEmoji(args: any): void {
    this.newComment.content += args.emoji.native;
  }
  addComment(form: NgForm): void {
    this.newCommentEmitter.emit(this.newComment);
    form.reset();
  }
}
