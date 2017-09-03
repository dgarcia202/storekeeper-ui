import { Component, OnInit } from '@angular/core';

import { ItemMetadata } from '../shared/item-metadata';

const METADATA : ItemMetadata = {
  id: '123456',
  name: 'one-little_file.xslx',
  size: 15026,
  custom: {}
};

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {

  metadata = METADATA;

  constructor() { }

  ngOnInit() { }
}
