import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderComponent } from '../../components/loader/loader';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-shell-layout',
  standalone: true,
  imports: [LoaderComponent, RouterOutlet, Navbar, CommonModule],
  templateUrl: './app-shell-layout.html',
  styleUrl: './app-shell-layout.scss',
})
export class AppShellLayoutComponent {
  loading$ = new BehaviorSubject(true);

  onActivate() {
    this.loading$.next(true);
    setTimeout(() => this.loading$.next(false), 300);
  }
}
