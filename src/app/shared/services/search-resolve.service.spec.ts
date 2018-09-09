import { TestBed, inject } from '@angular/core/testing';

import { SearchResolveService } from './search-resolve.service';

describe('SearchResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchResolveService]
    });
  });

  it('should be created', inject([SearchResolveService], (service: SearchResolveService) => {
    expect(service).toBeTruthy();
  }));
});
