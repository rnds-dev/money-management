import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategoryStats, ITransaction, ITransactionCategory, ITransactionType, ITypeStats } from '../models/transaction';
import { DataService } from './data.service';
import { IAccount } from '../models/account';
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
    this.transactionDataService.getAccounts.forEach(account => {
      amount += account.sum
    })
    return amount
  }

  private setZeroTypeStats(stats: ITypeStats): ITypeStats {
    this.transactionDataService.getTypes.forEach(type => {
      stats[type.name] = 0
    })
    return stats
  }

  public getTypeStats(params: FormGroup): ITypeStats {
    var stats: ITypeStats = {}

    this.dataService.getAll("transactions").subscribe((transactions: ITransaction[]) => {
      transactions.forEach(transaction => {
        if (transaction.date && (
          transaction.date < params.value.startDate ||
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
