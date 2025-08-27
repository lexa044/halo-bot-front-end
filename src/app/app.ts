import { Component, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { LoadingIndicator } from './components/loading/loading';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('halo-bot');
  isAuthenticated = false;
  layoutName = '';
  protected isOpen = false;
  protected menuActive = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.authService.isAuthenticated$().subscribe((auth) => {
      this.isAuthenticated = auth;
    });
  }

  protected headerLinks = [
    { label: 'Trade', url: '/trade' },
    { label: 'Orders', url: '/orders' },
    { label: 'Statements', url: '/statements' },
    {
      label: 'Finance',
      url: '/finance',
      children: [
        { label: 'Transactions', url: '/finance/transactions' },
        { label: 'Analytics', url: '/finance/analytics' },
      ],
    },
  ];
  protected handleMenuActive(): void {
    this.menuActive = !this.menuActive;
  }

  protected handleClick() {
    this.isOpen = !this.isOpen;
  }

  protected logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}