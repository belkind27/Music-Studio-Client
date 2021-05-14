import { Component, Input, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/shared/models/recommendation';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent implements OnInit {
  @Input() recommendations!: Recommendation[];
  constructor() {}
  ngOnInit(): void {}
}
