import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Card } from "primeng/card";

@Component({
  selector: 'app-auth',
  imports: [
    RouterModule,
    Card
],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {

}
