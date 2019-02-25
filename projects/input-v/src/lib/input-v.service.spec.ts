import { TestBed } from '@angular/core/testing';

import { InputVService } from './input-v.service';

describe('InputVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputVService = TestBed.get(InputVService);
    expect(service).toBeTruthy();
  });
});
