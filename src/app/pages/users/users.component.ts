import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.setTitleAndBreadcrumb('Users', [
      { label: 'Users' }
    ]);
  }
}
