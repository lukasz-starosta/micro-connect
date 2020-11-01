import { TestBed } from '@angular/core/testing';

import { StarterService } from './starter.service';

describe('StarterService', () => {
  let service: StarterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
