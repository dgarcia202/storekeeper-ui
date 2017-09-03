import { Component, OnInit } from '@angular/core';

import { Volume } from '../shared/volume';
import { VolumeService } from '../shared/volume.service';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css'],
  providers: [VolumeService]
})
export class VolumesComponent implements OnInit {

  volumes: Volume[];

  constructor(private volumeService: VolumeService) {
  }

  ngOnInit() {
    this.volumes = this.volumeService.getVolumes();
  }
}
