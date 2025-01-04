import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategoryStats, ITransaction, ITypeStats } from '../models/transaction';
import { DataService } from './data.service';
import { TransactionDataService } from './transaction-data.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  constructor(
    private transactionDataService: TransactionDataService,
    private dataService: DataService
  ) { }

  public getTotal(): number {
    let amount: number = 0
    this.transactionDataService.getAccountsObservable().subscribe(accounts =>
      accounts.reduce((sum, account) => account.sum + sum, 0)
    )
    return amount
  }

  private setZeroTypeStats(stats: ITypeStats): ITypeStats {
    this.transactionDataService.getTypesObservable().subscribe(types => {
      types.forEach(type => {
        stats[type.name] = 0
      })
    })
    return stats
  }

  public getTypeStats(params: FormGroup): ITypeStats {
    var stats: ITypeStats = {}

    stats = this.setZeroTypeStats(stats)

    this.dataService.getAll("transactions").subscribe((transactions: ITransaction[]) => {
      transactions.forEach(transaction => {
        if (transaction.date &&
          (transaction.date < params.value.startDate ||
            transaction.date > params.value.endDate)) return

        if (stats[transaction.type]) {
          stats[transaction.type] += transaction.sum
        } else {
          stats[transaction.type] = transaction.sum
        }
      }
      )
    }
    )
    return stats
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

  public getBudgetTotal(params: FormGroup): number {
    var total = 0
    this.transactionDataService.getCategories
      .forEach(category => {
        if (category.budget != null) total += category.budget
      })
    return total
  }
}
