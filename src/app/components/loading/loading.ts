import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'loading-indicator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.html',
  styleUrls: ['./loading.scss']
})
export class LoadingIndicator {
  
}
