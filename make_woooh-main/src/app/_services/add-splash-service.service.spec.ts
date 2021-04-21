import { TestBed } from '@angular/core/testing';

import { AddSplashServiceService } from './add-splash-service.service';

describe('AddSplashServiceService', () => {
  let service: AddSplashServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddSplashServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
