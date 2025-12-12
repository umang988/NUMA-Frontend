import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../core/components/sidebar/sidebar.component";
import { TitleComponent } from '../core/components/title/title.component';

@Component({
  selector: 'app-pages',
  imports: [
    RouterOutlet,
    SidebarComponent,
    TitleComponent
],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
})
export class PagesComponent {

}
