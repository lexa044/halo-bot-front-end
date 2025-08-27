import { Routes } from '@angular/router';
import { SigninComponent } from './pages/auth/signin.component';
import { OrdersComponent } from './pages/orders/orders';
import { StatementComponent } from './pages/statement/statement';
import { TradeComponent } from './pages/trade/trade';
import { AuthGuard } from './core/guards/auth.guard';
import { FinanceComponent } from './pages/finance/finance';
import { AnalyticsComponent } from './pages/finance/analytics/analytics';
import { TransactionsComponent } from './pages/finance/transactions/transactions';
import { RootRedirectGuard } from './core/guards/redirection.guard';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'trade', component: TradeComponent, canActivate: [AuthGuard] },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard] },
  { path: 'statements', component: StatementComponent, canActivate: [AuthGuard] },
  {
    path: 'finance',
    component: FinanceComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'transactions', component: TransactionsComponent },
      { path: 'analytics', component: AnalyticsComponent },
      { path: '', redirectTo: 'transactions', pathMatch: 'full' },
    ],
  },
  { path: '', canActivate: [RootRedirectGuard], component: SigninComponent },
];
