import { Component } from '@angular/core';
import { TitleService, BreadcrumbItem } from '../../services/title.service';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-title',
  imports: [BreadcrumbModule, AsyncPipe],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  homeItem: MenuItem = { icon: 'pi pi-home', routerLink: '/dashboard' };
  breadcrumbItems$: Observable<MenuItem[]>;

  constructor(public titleService: TitleService) {
    this.breadcrumbItems$ = this.titleService.breadcrumb$.pipe(
      map(items => items?.map(item => ({
        label: item.label,
        routerLink: item.route
      })) || [])
    );
  }
}