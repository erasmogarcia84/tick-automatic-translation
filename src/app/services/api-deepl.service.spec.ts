import { TestBed } from '@angular/core/testing';

import { ApiDeeplService } from './api-deepl.service';

describe('ApiDeeplService', () => {
  let service: ApiDeeplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDeeplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
