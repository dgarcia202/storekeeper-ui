import { Component, OnInit } from '@angular/core';

import { ItemMetadata } from '../shared/item-metadata';

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

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {

  metadata : ItemMetadata;
  keys : string[];

  constructor() {
    this.metadata = METADATA;
    this.keys = Object.keys(this.metadata.custom);
  }

  ngOnInit() { }
}
