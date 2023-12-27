import { TestBed } from '@angular/core/testing';

import { HttpinterceptorServiceService } from './httpinterceptor-service.service';

describe('HttpinterceptorServiceService', () => {
  let service: HttpinterceptorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpinterceptorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
