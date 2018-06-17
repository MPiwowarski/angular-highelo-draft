import { TestBed, inject } from '@angular/core/testing';

import { OrderImageService } from './order-image.service';

describe('OrderImageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderImageService]
    });
  });

  it('should be created', inject([OrderImageService], (service: OrderImageService) => {
    expect(service).toBeTruthy();
  }));
});
