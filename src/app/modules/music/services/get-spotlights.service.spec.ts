import { TestBed } from '@angular/core/testing';

import { GetSpotlightsService } from './get-spotlights.service';

describe('GetSpotlightsService', () => {
  let service: GetSpotlightsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSpotlightsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
