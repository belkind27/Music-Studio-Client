import { Component, Input, OnInit } from '@angular/core';
import { Spotlight } from 'src/app/shared/models/spotlight.model';

@Component({
  selector: 'app-spotlight-horizontal-bar',
  templateUrl: './spotlight-horizontal-bar.component.html',
  styleUrls: ['./spotlight-horizontal-bar.component.css'],
})
export class SpotlightHorizontalBarComponent implements OnInit {
  @Input() currentSpotlight!: Spotlight;

  constructor() {}

  ngOnInit(): void {}
}
