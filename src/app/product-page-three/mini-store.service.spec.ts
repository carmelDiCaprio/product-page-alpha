import { TestBed, inject } from '@angular/core/testing';

import { MiniStoreService } from './mini-store.service';

describe('MiniStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MiniStoreService]
    });
  });

  it('should ...', inject([MiniStoreService], (service: MiniStoreService) => {
    expect(service).toBeTruthy();
  }));
});
