import { Component, Input, OnInit } from '@angular/core';
import { Spotlight } from 'src/app/shared/models/spotlight.model';

@Component({
  selector: 'app-spotlight-vertical-bar',
  templateUrl: './spotlight-vertical-bar.component.html',
  styleUrls: ['./spotlight-vertical-bar.component.css'],
})
export class SpotlightVerticalBarComponent implements OnInit {
  @Input() currentSpotlight!: Spotlight;
  constructor() {}

  ngOnInit(): void {}
}
