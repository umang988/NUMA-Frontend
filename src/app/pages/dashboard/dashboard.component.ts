import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitleAndBreadcrumb('Dashboard', [
      { label: 'Dashboard' }
    ]);
  }
}
