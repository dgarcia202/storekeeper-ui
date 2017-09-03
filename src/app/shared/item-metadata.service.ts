import { Injectable } from '@angular/core';

import { ItemMetadata } from './item-metadata';

const METADATA : ItemMetadata = {
  id: '123456',
  name: 'one-little_file.xslx',
  size: 15026,
  custom: {
    onething: 'ffssfvsf',
    anotherThing: 'ugibibi',
    author: 'Alexander T.',
    year: 2017,
    views: 48,
    rate: 5
  }
};

@Injectable()
export class ItemMetadataService {

  constructor() { }

  getMetadata(id : string) : ItemMetadata {
    return METADATA;
  }
}
