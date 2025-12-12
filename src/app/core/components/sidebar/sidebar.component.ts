import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { AvatarModule } from 'primeng/avatar';
import { ThemeService } from '../../services/theme.service';
import { NgClass } from '@angular/common';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../../auth/service/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

interface SidebarMenuItem {
  label: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-sidebar',
  imports: [
    DrawerModule,
    ButtonModule, 
    MenuModule,
    AvatarModule,
    RouterModule,
    NgClass
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarVisible = false;

  menuItems: SidebarMenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-home', route: 'dashboard' },
    { label: 'Orders', icon: 'pi pi-gift', route: 'orders'},
    { label: 'Vehicle', icon: 'pi pi-truck', route: 'vehicle'},
    { label: 'Users', icon: 'pi pi-users', route: 'users' }
  ];

  userMenuItems: MenuItem[] = [
    { 
      label: 'Light Theme', 
      icon: 'pi pi-sun',
      command: () => this.themeService.setTheme(false)
    },
    { 
      label: 'Dark Theme', 
      icon: 'pi pi-moon',
      command: () => this.themeService.setTheme(true)
    },
    { separator: true },
    { 
      label: 'Logout', 
      icon: 'pi pi-sign-out',
      command: () => this.logout()
    }
  ];

  user = {
    name: '',
    email: '',
    avatar: ''
  };

  userData: User | null = null;

  constructor(
    public themeService: ThemeService,
    private authService: AuthService,
    private router: Router
  ) {
    this.updateUserInfo();
  }

  updateUserInfo() {
    const userDataStr = localStorage.getItem('user');
    if (userDataStr) {
      this.userData = JSON.parse(userDataStr) as User;
      this.user.name = `${this.userData.name} ${this.userData.surname}`;
      this.user.email = this.userData.userEmail;
      this.user.avatar = `${this.userData.name[0]}${this.userData.surname[0]}`.toUpperCase();
    } else {
      this.user.name = 'User';
      this.user.email = 'user@example.com';
      this.user.avatar = 'U';
    }
  }

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }


}
