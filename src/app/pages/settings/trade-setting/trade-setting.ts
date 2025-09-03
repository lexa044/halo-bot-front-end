import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trade-setting',
  imports: [CommonModule, FormsModule],
  templateUrl: './trade-setting.html',
  styleUrl: './trade-setting.scss',
  standalone: true,
})
export class TradeSettingComponent {
  bookmakers = ['SHRP','BF','3ET','VX','PIN','BDAQ','RF','MB','SBO','4CT','198'];
}
