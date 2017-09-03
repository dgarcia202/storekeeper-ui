import { TestBed, inject } from '@angular/core/testing';

import { ItemMetadataService } from './item-metadata.service';

describe('ItemMetadataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemMetadataService]
    });
  });

  it('should be created', inject([ItemMetadataService], (service: ItemMetadataService) => {
    expect(service).toBeTruthy();
  }));
});
