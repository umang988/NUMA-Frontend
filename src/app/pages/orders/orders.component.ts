import { Component, OnInit } from '@angular/core';
import { AuthRoutingModule } from "../../auth/auth-routing.module";
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-orders',
  imports: [AuthRoutingModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitleAndBreadcrumb('Orders', [
      { label: 'Orders' }
    ]);
  }
}
