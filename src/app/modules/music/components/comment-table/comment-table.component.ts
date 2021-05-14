import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/models/comment.model';
@Component({
  selector: 'app-comment-table',
  templateUrl: './comment-table.component.html',
  styleUrls: ['./comment-table.component.css'],
})
export class CommentTableComponent implements OnInit {
  @Input() comments!: Comment[] | undefined;
  constructor() {}
  ngOnInit(): void {}
}
