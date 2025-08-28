import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { IdentityComponent } from './identity/identity';
import { SecurityComponent } from './security/security';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, IdentityComponent, SecurityComponent],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
})
export class SettingComponent {
  activeTab: string = 'identity';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
