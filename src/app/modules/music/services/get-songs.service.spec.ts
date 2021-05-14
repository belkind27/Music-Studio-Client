import { TestBed } from '@angular/core/testing';

import { GetSongsService } from './get-songs.service';

describe('GetSongsService', () => {
  let service: GetSongsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSongsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
