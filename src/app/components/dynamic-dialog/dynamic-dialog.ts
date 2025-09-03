import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-dynamic-dialog',
  imports: [DialogModule, CommonModule],
  templateUrl: './dynamic-dialog.html',
  styleUrl: './dynamic-dialog.scss',
})
export class DynamicDialogComponent {
  @Input() visible = false;
  @Output() closed = new EventEmitter<void>();
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() blockCountChange = new EventEmitter<number>();
  handicapOptions = ['-1', '-0.75', '-0.5', '-0.25', '0', '0.25', '0.5'];
  selected: string[] = ['-0.5'];
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes['visible'] && !this.visible) {
      this.selected = ['-0.5'];
      this.blockCountChange.emit(this.selected.length);
    }
  }

  toggle(option: string) {
    if (this.selected.includes(option)) {
      if (this.selected.length === 1) {
        return;
      }
      this.selected = this.selected.filter((o) => o !== option);
    } else {
      this.selected.push(option);
    }

    this.blockCountChange.emit(this.selected.length);
  }
}
