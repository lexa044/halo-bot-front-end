import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentityComponent } from './identity/identity';
import { SecurityComponent } from './security/security';
import { TradeSettingComponent } from './trade-setting/trade-setting';
import { FinanceSettingComponent } from './finance-setting/finance-setting';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, IdentityComponent, SecurityComponent, TradeSettingComponent, FinanceSettingComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingComponent {
  activeTab: string = 'identity';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
