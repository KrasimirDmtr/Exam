import { TestBed } from '@angular/core/testing';

import { SplitServiceService } from './split-service.service';

describe('SplitServiceService', () => {
  let service: SplitServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
