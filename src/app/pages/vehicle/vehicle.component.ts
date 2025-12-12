import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-vehicle',
  imports: [],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.scss',
})
export class VehicleComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitleAndBreadcrumb('Vehicle', [
      { label: 'Vehicle' }
    ]);
  }
}
