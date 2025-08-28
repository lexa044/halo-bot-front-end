import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identity',
  imports: [CommonModule, FormsModule],
  templateUrl: './identity.html',
  styleUrl: './identity.scss',
})
export class IdentityComponent {
  notifications = true;
}
