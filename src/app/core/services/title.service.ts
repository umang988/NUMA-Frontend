import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  route?: string;
}

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSubject = new BehaviorSubject<string>('');
  private breadcrumbSubject = new BehaviorSubject<BreadcrumbItem[]>([]);

  public title$ = this.titleSubject.asObservable();
  public breadcrumb$ = this.breadcrumbSubject.asObservable();

  setTitle(title: string) {
    this.titleSubject.next(title);
  }

  setBreadcrumb(items: BreadcrumbItem[]) {
    this.breadcrumbSubject.next(items);
  }

  setTitleAndBreadcrumb(title: string, breadcrumb: BreadcrumbItem[]) {
    this.setTitle(title);
    this.setBreadcrumb(breadcrumb);
  }
}