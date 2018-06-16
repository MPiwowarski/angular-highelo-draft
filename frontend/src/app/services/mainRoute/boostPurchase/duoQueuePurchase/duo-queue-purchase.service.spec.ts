import { TestBed, inject } from '@angular/core/testing';

import { DuoQueuePurchaseService } from './duo-queue-purchase.service';

describe('DuoQueuePurchaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DuoQueuePurchaseService]
    });
  });

  it('should be created', inject([DuoQueuePurchaseService], (service: DuoQueuePurchaseService) => {
    expect(service).toBeTruthy();
  }));
});
