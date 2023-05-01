//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';

import { AccountComponent } from './pages/accounts/account.component';
import { AccountCreateComponent } from './pages/accounts/account-create/account-create.component';
import { AccountCardComponent } from './pages/accounts/account-card/account-card.component';
import { AccountViewComponent } from './pages/accounts/account-view/account-view.component';
import { AccountsListComponent } from './pages/accounts/accounts-list/accounts-list.component';

import { TransactionComponent } from './pages/transactions/transaction.component';
import { TransactionCreateComponent } from './pages/transactions/transaction-create/transaction-create.component';
import { TransactionCardComponent } from './pages/transactions/transaction-card/transaction-card.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list/transactions-list.component';

import { HomeComponent } from './pages/home/home.component';

import { ModalComponent } from './components/modal/modal.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';

import { BudgetComponent } from './pages/budget/budget.component';
import { BudgetCategoryListComponent } from './pages/budget/budget-category-list/budget-category-list.component';
import { BudgetCategoryCardComponent } from './pages/budget/budget-category-card/budget-category-card.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TotalComponent } from './components/total/total.component';
import { ChartStatsComponent } from './pages/home/chart-stats/chart-stats.component';

import { SettingsComponent } from './pages/settings/settings.component';

import { CategoriesComponent } from './pages/settings/categories/categories.component';
import { CategoryCardComponent } from './pages/settings/categories/category-card/category-card.component';
import { CategoryCreateComponent } from './pages/settings/categories/category-create/category-create.component';
import { CategoriesListComponent } from './pages/settings/categories/categories-list/categories-list.component';
import { ProgressBarChartComponent } from './components/charts/progress-bar-chart/progress-bar-chart.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountCreateComponent,
    AccountCardComponent,
    AccountViewComponent,
    TransactionComponent,
    TransactionCreateComponent,
    TransactionCardComponent,
    HomeComponent,
    ModalComponent,
    TransactionsListComponent,
    TitlePageComponent,
    AccountsListComponent,
    BarChartComponent,
    DropdownComponent,
    BudgetComponent,
    BudgetCategoryListComponent,
    BudgetCategoryCardComponent,
    ToolbarComponent,
    TotalComponent,
    ChartStatsComponent,
    SettingsComponent,
    CategoriesComponent,
    CategoryCardComponent,
    CategoryCreateComponent,
    CategoriesListComponent,
    ProgressBarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
