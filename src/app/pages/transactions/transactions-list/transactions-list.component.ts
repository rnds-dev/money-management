import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { DateService } from 'src/app/services/date.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
})
export class TransactionsListComponent implements OnInit {
  groupedTransactions: TransactionsByDate[] = []
  transactionCategories: Array<any> = []
  selectedCategories: Array<string> = []
  transactionCategoriesTitle: string = "Category"

  transactionAccounts: Array<any> = []
  selectedAccounts: Array<string> = []
  transactionAccountsTitle: string = "Accounts"

  transactionTypes: Array<any> = []
  selectedTypes: Array<string> = []
  transactionTypesTitle: string = "Type"

  transactions$!: Observable<ITransaction[]>

  constructor(
    private dataService: DataService,
    private dateService: DateService,
    private transactionDataService: TransactionDataService) { }

  ngOnInit(): void {
    this.transactions$ = this.dataService.getAll("transactions")
    this.transactionCategories = this.transactionDataService.getCategories
    this.transactionTypes = this.transactionDataService.getTypes
    this.transactionAccounts = this.transactionDataService.getAccounts

    this.transactions$.subscribe((transactions: ITransaction[]) => {
      const obj = transactions.reduce((data: any, current) => {
        let key = this.dateService.convertDateFormat(current.date!)
        if (!data[key]) {
          data[key] = []
        }
        data[key].push(current)
        return data
      }, {})
      this.groupedTransactions = Object.keys(obj).map(key => ({
        date: key,
        transactions: obj[key]
      }))
    })
  }

  getSelectedTypes(array: any[]) {
    this.selectedTypes = array
  }
  getSelectedCategories(array: any[]) {
    this.selectedCategories = array
  }
  getSelectedAccounts(array: any[]) {
    this.selectedAccounts = array
  }

  checkTransaction(transaction: ITransaction): boolean {
    return this.checkFilter(transaction.type, this.selectedTypes) &&
      this.checkFilter(transaction.category, this.selectedCategories) &&
      this.checkFilter(transaction.account, this.selectedAccounts)
  }

  private checkFilter(value: any, filters: Array<any>): boolean {
    return filters.length === 0 || filters.includes(value)
  }
}

export interface TransactionsByDate {
  date: string,
  transactions: any,
}