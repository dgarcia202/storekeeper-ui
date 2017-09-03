import { Component, OnInit } from '@angular/core';

import { Volume } from '../shared/volume';

const VOLUMES: Volume[] = [
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\server001\\mnt\\datavol', active: true },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\nasserver16\\volumes\\datastore2', active: false },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\nasserver16\\clientdata\\151652120', active: false },
  { id: '1891240A877D4183AB68A487C8E030D7', path: '\\\\gandalf\\disk1\\data', active: false },
];

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {

  volumes = VOLUMES;

  constructor() { }

  ngOnInit() { }
}
