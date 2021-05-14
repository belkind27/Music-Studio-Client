import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Spotlight } from 'src/app/shared/models/spotlight.model';

@Component({
  selector: 'app-spotlight-form',
  templateUrl: './spotlight-form.component.html',
  styleUrls: ['./spotlight-form.component.css'],
})
export class SpotlightFormComponent implements OnInit {
  constructor() {}
  model!: Spotlight;
  @Input() set data(spotlight: Spotlight) {
    if (!spotlight) {
      spotlight = new Spotlight();
    }
    this.model = spotlight;
  }
  @Output() submitEmitter: EventEmitter<any> = new EventEmitter();
  submit(): void {
    this.submitEmitter.emit(this.model);
  }
  ngOnInit(): void {}
}
