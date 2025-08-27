import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loggedIn$ = new BehaviorSubject<boolean>(this.hasToken());

  isAuthenticated$(): Observable<boolean> {
    return this.loggedIn$.asObservable();
  }

  isAuthenticated(): boolean {
    return this.loggedIn$.value;
  }
  login(username: string, password: string): Observable<boolean> {
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('auth_token', 'dummy-token');
      this.loggedIn$.next(true);
      return of(true).pipe(delay(500));
    }
    return throwError(() => new Error('Invalid credentials'));
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.loggedIn$.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }
}
