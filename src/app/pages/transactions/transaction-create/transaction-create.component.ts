import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models/account';
import { ITransactionCategory, ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
})
export class TransactionCreateComponent implements OnInit {
  accounts$!: Observable<IAccount[]>
  types$!: Observable<ITransactionType[]>
  categories$!: Observable<ITransactionCategory[]>
  
  selectedType: string = ""
  selectedAccount!: number

  newTransaction: FormGroup = new FormGroup({
    type: new FormControl(),
    category: new FormControl(),
    account: new FormControl(),
    to_account: new FormControl(),
    sum: new FormControl(),
    fees: new FormControl(),
    date: new FormControl(),
    description: new FormControl()
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.accounts$ = this.dataService.getAll("accounts")
    this.types$ = this.dataService.getAll("transaction_types")
    this.categories$ = this.dataService.getAll("transaction_categories")
  }

  onChangeCategories() {
    // Move the category check to function create()
    // this.newTransaction.value.category = null
  }

  create() {
    if (this.newTransaction.value.type === "Expense")
      this.newTransaction.value.sum *= -1

    if (this.newTransaction.value.type !== "Transfer")
      this.newTransaction.value.to_account = null

    this.dataService.add("transactions", { ...this.newTransaction.value })       
  }
}
