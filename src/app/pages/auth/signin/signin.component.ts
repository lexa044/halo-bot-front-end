import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSnackBarModule],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  private authService = inject(AuthService);
  private toastr = inject(ToastrService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  formData = { username: '', password: '' };

  onSubmit() {
    this.authService.login(this.formData.username, this.formData.password).subscribe({
      next: () => this.router.navigate(['/trade']),
      error: () => this.openErrorSnackBar('Invalid username/password combination.'),
    });
  }

  private openErrorSnackBar(message: string): void {
    this.toastr.error(message);
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
  goToRegister() {
    this.router.navigate(['/register']);
  }
}
