import { Component, OnInit } from '@angular/core';

import { ItemMetadata } from '../shared/item-metadata';
import { ItemMetadataService } from '../shared/item-metadata.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css'],
  providers: [ItemMetadataService]
})
export class RetrieveComponent implements OnInit {

  metadata: ItemMetadata;
  keys: string[];

  constructor(private itemMetadataService: ItemMetadataService) {
  }

  ngOnInit() {
    this.metadata = this.itemMetadataService.getMetadata('');
    this.keys = Object.keys(this.metadata.custom);
  }
}
