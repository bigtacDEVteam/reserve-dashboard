import { TestBed } from '@angular/core/testing';

import { KavassService } from './kavass.service';

describe('KavassService', () => {
  let service: KavassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KavassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
