import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'sticky-modal',
  standalone: true,
  imports: [CommonModule, ButtonModule, DialogModule, FormsModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class StickyModalComponent {
visibleFilters = false;

  col1Master = false;
  col2Master = false;
  col3Master = false;

  col1Options = Array.from({ length: 8 }, () => ({ checked: false }));
  col2Options = Array.from({ length: 5 }, () => ({ checked: false }));
  col3Options = Array.from({ length: 10 }, () => ({ checked: false }));

  toggleAll(col: string) {
    if (col === 'col1') {
      this.col1Options.forEach(o => o.checked = this.col1Master);
    }
    if (col === 'col2') {
      this.col2Options.forEach(o => o.checked = this.col2Master);
    }
    if (col === 'col3') {
      this.col3Options.forEach(o => o.checked = this.col3Master);
    }
  }
}
