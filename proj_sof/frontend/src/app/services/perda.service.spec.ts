import { TestBed } from '@angular/core/testing';

import { PerdaService } from './perda.service';

describe('PerdaService', () => {
  let service: PerdaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerdaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
