import { Component } from '@angular/core';
import { OrdersComponent } from '../orders/orders';

@Component({
  selector: 'app-statement',
  imports: [OrdersComponent],
  templateUrl: './statement.html',
  styleUrl: './statement.scss'
})
export class StatementComponent {

}
