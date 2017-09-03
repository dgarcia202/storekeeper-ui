import { Injectable } from '@angular/core';

import { Volume } from './volume';

const VOLUMES: Volume[] = [
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\server001\\mnt\\datavol', active: true },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\nasserver16\\volumes\\datastore2', active: false },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\nasserver16\\clientdata\\151652120', active: false },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\gandalf\\disk1\\data', active: false },
];

@Injectable()
export class VolumeService {

  constructor() { }

  getVolumes(): Volume[] {
    return VOLUMES;
  }
}
