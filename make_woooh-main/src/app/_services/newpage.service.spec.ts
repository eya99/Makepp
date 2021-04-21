import { TestBed } from '@angular/core/testing';

import { NewpageService } from './newpage.service';

describe('NewpageService', () => {
  let service: NewpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
