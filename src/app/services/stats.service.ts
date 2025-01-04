import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategoryStats, ITransaction, ITypeStats } from '../models/transaction';
import { DataService } from './data.service';
import { TransactionDataService } from './transaction-data.service';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(
    private transactionDataService: TransactionDataService,
    private dataService: DataService
  ) { }

  public getTotal(): Observable<number> {
    return this.transactionDataService.getAccountsObservable().pipe(
      map(accounts =>
          accounts.reduce((sum, account) => account.sum + sum, 0)
      )
    )
  }
  private initializeTypeStats(): Observable<ITypeStats> {
    return this.transactionDataService.getTypesObservable().pipe(
      map((types) => {
        const stats: ITypeStats = {};
        types.forEach((type) => (stats[type.name] = 0));
        return stats;
      })
    );
  }

  public getTypeStats(params: FormGroup): Observable<ITypeStats> {
    return combineLatest([
      this.initializeTypeStats(),
      this.dataService.getAll('transactions'),
    ]).pipe(
      map(([stats, transactions]) => {
        transactions.forEach((transaction: ITransaction) => {
          if (
            transaction.date &&
            (transaction.date < params.value.startDate ||
              transaction.date > params.value.endDate)
          ) {
            return;
          }

          stats[transaction.type] =
            (stats[transaction.type] || 0) + transaction.sum;
        });
        return stats;
      })
    );
  }

  public getCategoryStats(params: FormGroup, type: string): ICategoryStats {
    var stats: ICategoryStats = {}
    this.dataService.getAll("transactions").subscribe((transactions: ITransaction[]) => {
      transactions.forEach(transaction => {
        if (transaction.type != type) return
        if (transaction.date && (
          transaction.date < params.value.startDate ||
          transaction.date > params.value.endDate)) return

        if (stats[transaction.category]) {
          stats[transaction.category] += transaction.sum
        } else {
          stats[transaction.category] = transaction.sum
        }
      }
      )
    }
    )
    return stats
  }

  public getBudgetTotal(params: FormGroup): Observable<number> {
    return this.transactionDataService.getCategoriesObservable().pipe(
      map(categories => categories.reduce((total, category) => total + (category.budget || 0), 0))
    )
  }
}
