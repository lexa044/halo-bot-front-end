import { Routes } from '@angular/router';

import { SigninComponent } from './pages/auth/signin/signin.component';
import { OrdersComponent } from './pages/orders/orders';
import { StatementComponent } from './pages/statement/statement';
import { TradeComponent } from './pages/trade/trade';
import { FinanceComponent } from './pages/finance/finance';
import { AnalyticsComponent } from './pages/finance/analytics/analytics';
import { TransactionsComponent } from './pages/finance/transactions/transactions';

import { AuthGuard } from './core/guards/auth.guard';
import { RootRedirectGuard } from './core/guards/redirection.guard';
import { AppShellLayoutComponent } from './layout/app-shell-layout/app-shell-layout';
import { AUTH_ROUTES } from './pages/auth/auth.routes';
import { SettingComponent } from './pages/settings/settings';

export const routes: Routes = [
  ...AUTH_ROUTES,
  {
    path: '',
    component: AppShellLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'trade', component: TradeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'statements', component: StatementComponent },
      { path: 'settings', component: SettingComponent },
      {
        path: 'finance',
        component: FinanceComponent,
        children: [
          { path: 'transactions', component: TransactionsComponent },
          { path: 'analytics', component: AnalyticsComponent },
          { path: '', redirectTo: 'transactions', pathMatch: 'full' },
        ],
      },
    ],
  },

  { path: '', component: SigninComponent, canActivate: [RootRedirectGuard] },
  { path: '**', redirectTo: 'signin' },
];
