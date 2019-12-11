import { TestBed, inject } from '@angular/core/testing';

import { TopPlayersForCrimneService } from './top-players-for-crimne.service';

describe('TopPlayersForCrimneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopPlayersForCrimneService]
    });
  });

  it('should be created', inject([TopPlayersForCrimneService], (service: TopPlayersForCrimneService) => {
    expect(service).toBeTruthy();
  }));
});
