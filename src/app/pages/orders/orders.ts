import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-orders',
  imports: [CommonModule, TableModule],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class OrdersComponent {
  @Input() showHeader: boolean = false;
  selected: { startDate: Date; endDate: Date } | null = null;
}
