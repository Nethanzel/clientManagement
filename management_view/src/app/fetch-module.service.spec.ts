import { TestBed } from '@angular/core/testing';

import { FetchModuleService } from './fetch-module.service';

describe('FetchModuleService', () => {
  let service: FetchModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
