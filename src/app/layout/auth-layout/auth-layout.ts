import { Component } from '@angular/core';
import { LoaderComponent } from '../../components/loader/loader';
import { BehaviorSubject } from 'rxjs';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [LoaderComponent, RouterOutlet],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss'
})
export class AuthLayoutComponent {
  loading$ = new BehaviorSubject(true);

  onActivate() {
    setTimeout(() => this.loading$.next(false));
  }
}
