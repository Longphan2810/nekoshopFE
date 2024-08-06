import { TestBed } from '@angular/core/testing';

import { LocationCustomerService } from './location-customer.service';

describe('LocationCustomerService', () => {
  let service: LocationCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
