import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { AccountComponent } from './pages/accounts/account.component';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TransactionComponent } from './pages/transactions/transaction.component';

const routes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'accounts', component: AccountComponent},
  { path: 'transactions', component: TransactionComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
