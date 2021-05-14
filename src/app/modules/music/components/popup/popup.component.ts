import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() isAlive!: boolean;
  commentStyle!: string;
  private colors = ['green', 'blue', 'red', 'purple', 'yellow'];
  constructor() {}
  ngOnInit(): void {
    const color = this.colors[this.randomColorInit() - 1];
    this.commentStyle = `${color} sb${this.randomArrowInit()}-${color}`;
  }
  private randomColorInit(): number {
    return Math.floor(Math.random() * 5) + 1;
  }
  private randomArrowInit(): number {
    return Math.floor(Math.random() * 4) + 1;
  }
}
