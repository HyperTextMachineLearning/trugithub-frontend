import { TestBed } from '@angular/core/testing';

import { FetchReposService } from './fetch-repos.service';

describe('FetchReposService', () => {
  let service: FetchReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchReposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
