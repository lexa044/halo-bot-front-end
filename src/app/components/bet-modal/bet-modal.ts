import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';

import { BetDialogData } from '../../core/models/bet-modal.model';
import { PriceChartComponent } from '../price-chart/price-chart';
import { DynamicDialogComponent } from '../dynamic-dialog/dynamic-dialog';
import { BettingDataService } from '../../core/services/betting-data/betting-data.service';

@Component({
  selector: 'app-bet-modal',
  standalone: true,
  imports: [CommonModule, DialogModule, FormsModule, PriceChartComponent, DynamicDialogComponent],
  templateUrl: './bet-modal.html',
  styleUrl: './bet-modal.scss',
})
export class BetModalComponent implements OnInit {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Input() betType = '';

  stake = 0;
  priceChartVisible = false;
  secondaryDialogVisible = false;
  dialogWidth = 450;

  data!: BetDialogData;

  constructor(private bettingDataService: BettingDataService) {}

  ngOnInit(): void {
    this.bettingDataService
      .getBetDialogData()
      .pipe(take(1))
      .subscribe((betData) => (this.data = betData));
  }

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }

  openPriceChart(): void {
    this.priceChartVisible = true;
  }

  onBlockCountChange(count: number): void {
    const BASE_WIDTH = 450;
    const EXTRA_WIDTH = 350;

    this.dialogWidth = BASE_WIDTH + (count - 1) * EXTRA_WIDTH;

    setTimeout(() => {
      const dialogElement = document.querySelector('.p-dialog') as HTMLElement;
      if (dialogElement) {
        dialogElement.style.width = `${this.dialogWidth}px`;
        dialogElement.style.minWidth = `${this.dialogWidth}px`;
        dialogElement.style.maxWidth = `${this.dialogWidth}px`;
      }
    });
  }
}
