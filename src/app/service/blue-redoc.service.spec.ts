import { TestBed } from '@angular/core/testing';

import { BlueRedocService } from './blue-redoc.service';

describe('BlueRedocService', () => {
  let service: BlueRedocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlueRedocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
