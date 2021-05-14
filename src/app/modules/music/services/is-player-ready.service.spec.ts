import { TestBed } from '@angular/core/testing';

import { IsPlayerReadyService } from './is-player-ready.service';

describe('IsPlayerReadyService', () => {
  let service: IsPlayerReadyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsPlayerReadyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
