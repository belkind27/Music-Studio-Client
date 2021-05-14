import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recommendation } from 'src/app/shared/models/recommendation';

@Component({
  selector: 'app-recommendetion-form',
  templateUrl: './recommendetion-form.component.html',
  styleUrls: ['./recommendetion-form.component.css'],
})
export class RecommendetionFormComponent implements OnInit {
  constructor() {}
  model!: Recommendation;
  @Input() set data(recommendation: Recommendation) {
    if (!recommendation) {
      recommendation = new Recommendation();
    }
    this.model = recommendation;
  }
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  submit(): void {
    if (!this.model.date) {
      this.model.date = new Date();
    }
    this.submitEmitter.emit(this.model);
  }
  ngOnInit(): void {}
}
