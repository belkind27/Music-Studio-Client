import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/shared/models/recommendation';
import { GetRecommendationsService } from '../../services/get-recommendations.service';

@Component({
  selector: 'app-recommendation-container',
  templateUrl: './recommendation-container.component.html',
  styleUrls: ['./recommendation-container.component.css'],
  providers: [GetRecommendationsService],
})
export class RecommendationContainerComponent implements OnInit {
  recommendations!: Recommendation[];
  constructor(private service: GetRecommendationsService) {}
  ngOnInit(): void {
    this.service
      .getRecommendations()
      .subscribe((res) => (this.recommendations = res));
  }
}
