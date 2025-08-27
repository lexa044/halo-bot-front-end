import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-analytics',
  imports: [CommonModule],
  templateUrl: './analytics.html',
  styleUrl: './analytics.scss',
})
export class AnalyticsComponent {
  activeTab: 'roi' | 'money' | 'hide' = 'roi';

  setActiveTab(tab: 'roi' | 'money' | 'hide') {
    this.activeTab = tab;
  }
}
