import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Sport } from '../../core/models/sport';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { AccordionModule } from 'primeng/accordion';
import { StickyModalComponent } from '../../components/modal/modal';
import { BettingDataService } from '../../core/services/betting-data/betting-data.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-trade',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ToggleSwitchModule,
    AccordionModule,
    StickyModalComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './trade.html',
  styleUrls: ['./trade.scss'],
})
export class TradeComponent implements OnInit {
  sports: Sport[] = [];
  parlay: boolean = false;
  outright: boolean = false;
  favorites: boolean = false;
  sortByEvent: boolean = false;
  loading: boolean = true;
  sidebarCollapsed = false;

  constructor(private bettingService: BettingDataService, private spinner: NgxSpinnerService) {}
  openPanel: string = 'siteStatus';
  visibleFilters: boolean = false;

  togglePanel(panel: string) {
    this.openPanel = this.openPanel === panel ? '' : panel;
  }
  ngOnInit(): void {
    this.spinner.show();
    this.bettingService.getSports().subscribe({
      next: (data) => {
        this.sports = data;
        this.spinner.hide();
      },
      error: () => {
        this.spinner.hide();
      },
    });
  }
}
