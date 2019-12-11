import { TestBed, inject } from '@angular/core/testing';

import { TopTeamsForCrimeService } from './top-teams-for-crime.service';

describe('TopTeamsForCrimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TopTeamsForCrimeService]
    });
  });

  it('should be created', inject([TopTeamsForCrimeService], (service: TopTeamsForCrimeService) => {
    expect(service).toBeTruthy();
  }));
});
