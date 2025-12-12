import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor(private messageService: MessageService) {}

  success(message: string, title: string = 'Success') {
    this.messageService.add({
      severity: 'success',
      summary: title,
      detail: message,
      styleClass: 'p-toast-success'
    });
  }

  error(message: string, title: string = 'Error') {
    this.messageService.add({
      severity: 'error',
      summary: title,
      detail: message,
      styleClass: 'p-toast-error'
    });
  }

  warn(message: string, title: string = 'Warning') {
    this.messageService.add({
      severity: 'warn',
      summary: title,
      detail: message,
      styleClass: 'p-toast-warn'
    });
  }

  info(message: string, title: string = 'Info') {
    this.messageService.add({
      severity: 'info',
      summary: title,
      detail: message,
      styleClass: 'p-toast-info'
    });
  }
}