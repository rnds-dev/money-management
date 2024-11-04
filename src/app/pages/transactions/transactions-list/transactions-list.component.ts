import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models/account';
import { ITransaction, ITransactionCategory, ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
})
export class TransactionsListComponent  implements OnInit {
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

  accounts$!: Observable<IAccount[]>
  types$!: Observable<ITransactionType[]>
  categories$!: Observable<ITransactionCategory[]>

  constructor(private dataService: DataService, private dateService: DateService) { }
  
  ngOnInit(): void {
    this.dataService.getAll("transaction_types").subscribe((types) => {
      this.transactionTypes = types
    })
    this.dataService.getAll("transaction_categories").subscribe((categories) => {
      this.transactionCategories = categories
    })
    this.dataService.getAll("accounts").subscribe((accounts) => {
      this.transactionAccounts = accounts
    })

    this.transactions$ = this.dataService.getAll("transactions")
    this.accounts$ = this.dataService.getAll("accounts")
    this.types$ = this.dataService.getAll("transaction_types")
    this.categories$ = this.dataService.getAll("transaction_categories")

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
    if (this.selectedTypes.length != 0)       if(!this.selectedTypes.includes(transaction.type))          return false
    if (this.selectedCategories.length != 0)  if(!this.selectedCategories.includes(transaction.category)) return false
    if (this.selectedAccounts.length != 0)    if(!this.selectedAccounts.includes(transaction.account))    return false
    return true
  }
}

export interface TransactionsByDate {
  date: string,
  transactions: any,
}