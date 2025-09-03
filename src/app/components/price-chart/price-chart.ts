import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ChartModule } from 'primeng/chart';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-price-chart',
  standalone: true,
  imports: [CommonModule, TableModule, ChartModule, DialogModule],
  templateUrl: './price-chart.html',
  styleUrls: ['./price-chart.scss'],
})
export class PriceChartComponent {
  @Output() close = new EventEmitter<void>();
  @Input() priceChartVisible = false;
  prices = [
    { name: 'PIN', h24: '--', h8: 739.0, h1: 788.9, ko: 752.0 },
    { name: 'SHRP', h24: '--', h8: 850.0, h1: '--', ko: '--' },
    { name: 'MB', h24: '--', h8: 1100.0, h1: 1049.9, ko: 1049.9 },
    { name: 'BF', h24: '--', h8: 1150.0, h1: 1100.0, ko: 1100.0 },
  ];

  data: any;
  options: any;

  constructor() {
    this.data = {
      labels: ["1H 28'", 'HT', "2H 5'", "2H 25'"],
      datasets: [
        {
          label: 'PIN',
          data: [5000, 12000, 11000, 65000],
          borderColor: '#6ee7b7',
          backgroundColor: 'transparent',
          tension: 0.3,
        },
        {
          label: 'SHRP',
          data: [2000, 8000, 9000, 45000],
          borderColor: '#60a5fa',
          backgroundColor: 'transparent',
          tension: 0.3,
        },
        {
          label: 'MB',
          data: [3000, 10000, 10500, 60000],
          borderColor: '#f9a8d4',
          backgroundColor: 'transparent',
          tension: 0.3,
        },
        {
          label: 'BF',
          data: [4000, 11000, 12000, 70000],
          borderColor: '#fcd34d',
          backgroundColor: 'transparent',
          tension: 0.3,
        },
      ],
    };

    this.options = {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: '#fff',
          },
        },
      },
      scales: {
        x: {
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' },
        },
        y: {
          ticks: { color: '#fff' },
          grid: { color: 'rgba(255,255,255,0.1)' },
        },
      },
    };
  }
}
