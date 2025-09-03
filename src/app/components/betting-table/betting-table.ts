import { Component } from '@angular/core';
import { BetModalComponent } from '../bet-modal/bet-modal';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { BetEvent } from '../../core/models/bet-event.model';
import { BettingDataService } from '../../core/services/betting-data/betting-data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-betting-table',
  imports: [CommonModule, BetModalComponent, DialogModule],
  templateUrl: './betting-table.html',
  styleUrl: './betting-table.scss',
})
export class BettingTableComponent {
  constructor(private bettingDataService: BettingDataService) {}

  events: BetEvent[] = [];
  modalVisible = false;
  selectedBetType: string = '';
  betSlips: {
    betType: string;
    visible: boolean;
    top: number;
    left: number;
  }[] = [];

  ngOnInit(): void {
    this.bettingDataService
      .getEvents()
      .pipe(take(1))
      .subscribe((evts) => (this.events = evts));
  }

  openModal(type: string) {
    const exists = this.betSlips.some((slip) => slip.betType === type && slip.visible);
    if (exists) {
      return;
    }

    this.betSlips.push({
      betType: type,
      visible: true,
      top: 80 + this.betSlips.length * 20,
      left: 120 + this.betSlips.length * 30,
    });
  }

  closeModal(index: number) {
    this.betSlips.splice(index, 1);
  }

  visibleChange(event: boolean) {
    this.modalVisible = false;
  }
}
