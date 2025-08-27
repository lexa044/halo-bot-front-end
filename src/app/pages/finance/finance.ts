import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-finance',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './finance.html',
  styleUrls: ['./finance.scss'],
})
export class FinanceComponent {
  selectedRange: Date[] | undefined;
}
