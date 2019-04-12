import { TestBed } from '@angular/core/testing';

import { AntherProductService } from './anther-product.service';

describe('AntherProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AntherProductService = TestBed.get(AntherProductService);
    expect(service).toBeTruthy();
  });
});
