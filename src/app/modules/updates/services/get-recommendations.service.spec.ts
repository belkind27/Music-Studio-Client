import { TestBed } from '@angular/core/testing';

import { GetRecommendationsService } from './get-recommendations.service';

describe('GetRecommendationsService', () => {
  let service: GetRecommendationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRecommendationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
