import { TestBed, inject } from '@angular/core/testing';

import { ApiControllerTwoService } from './api-controller-two.service';

describe('ApiControllerTwoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiControllerTwoService]
    });
  });

  it('should ...', inject([ApiControllerTwoService], (service: ApiControllerTwoService) => {
    expect(service).toBeTruthy();
  }));
});
