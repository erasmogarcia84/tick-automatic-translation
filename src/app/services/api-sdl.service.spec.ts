import { TestBed } from '@angular/core/testing';

import { ApiSdlService } from './api-sdl.service';

describe('ApiSdlService', () => {
  let service: ApiSdlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSdlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
