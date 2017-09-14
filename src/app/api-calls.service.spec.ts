import { TestBed, inject } from '@angular/core/testing';

import { ApiCallsService } from './api-calls.service';

describe('ApiCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCallsService]
    });
  });

  it('should ...', inject([ApiCallsService], (service: ApiCallsService) => {
    expect(service).toBeTruthy();
  }));
});
