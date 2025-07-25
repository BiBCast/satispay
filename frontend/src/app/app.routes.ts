import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login/login';
import { MainLayoutComponent } from './pages/layout/layout';
import { HomeComponent } from './pages/home/home';
import { ProfileComponent } from './pages/profile/profile';
import { TransactionsComponent } from './pages/transactions/transactions';
import { WalletComponent } from './pages/wallet/wallet';
import { SettingsComponent } from './pages/settings/settings';
import { SupportComponent } from './pages/support/support';
import { MessagesComponent } from './pages/messages/messages';
import { ReportsComponent } from './pages/reports/reports';
import { MerchantsComponent } from './pages/merchants/merchants';
import { ContactsComponent } from './pages/contacts/contacts';
import { RequestsComponent } from './pages/requests/requests';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'home',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: HomeComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'wallet', component: WalletComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'report', component: ReportsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'support', component: SupportComponent },
      { path: 'merchants', component: MerchantsComponent },
      { path: 'requests', component: RequestsComponent },
      { path: 'contacts', component: ContactsComponent },
    ],
  },
  { path: '**', redirectTo: '/login' },
];
