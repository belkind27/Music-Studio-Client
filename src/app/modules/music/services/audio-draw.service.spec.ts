import { TestBed } from '@angular/core/testing';

import { AudioDrawService } from './audio-draw.service';

describe('AudioDrawService', () => {
  let service: AudioDrawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioDrawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
