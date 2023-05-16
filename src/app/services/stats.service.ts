import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ICategoryStats, ITransaction, ITransactionCategory, ITransactionType, ITypeStats } from '../models/transaction';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  // stats: any = {}
  constructor(private dataService: DataService) { } 

  private setZeroTypeStats(stats: ITypeStats) : ITypeStats {
    this.dataService.getAll("transaction_types").subscribe((types: ITransactionType[]) => {
      types.forEach(type => {
        stats[type.name] = 0
      })
    })
    return stats
  }

  getTypeStats(params: FormGroup) : ITypeStats {
    var stats: ITypeStats = {}
    // this.setZeroTypeStats(stats)
    
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
      } //forEach function
      ) //forEach
    } //subscribe function
    ) //subscribe

    // const sorted = Object.keys(this.stats).sort().reduce((acc, key) => {
    //   acc[key] = this.stats[key]
    //   return acc
    // })
    // console.log(sorted);
    return stats
  } //getData()

  getCategoryStats(params: FormGroup, type: string) : ICategoryStats {
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

      } //forEach function
      ) //forEach
    } //subscribe function
    ) //subscribe

    // const sorted = Object.keys(this.stats).sort().reduce((acc, key) => {
    //   acc[key] = this.stats[key]
    //   return acc
    // })
    // console.log(sorted);
    return stats

  } //getData()

  getBudgetTotal(params: FormGroup) : number {
    var total = 0
    this.dataService.getAll("transaction_categories").subscribe((categories: ITransactionCategory[]) => {
      categories.forEach(category => {
        if (category.budget!=null) total+=category.budget
      })
    })
    return total
  }
}
