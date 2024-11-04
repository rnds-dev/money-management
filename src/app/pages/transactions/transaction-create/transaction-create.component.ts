import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { DateService } from 'src/app/services/date.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
})
export class TransactionCreateComponent {
  newTransaction: FormGroup = new FormGroup({
    type: new FormControl(),
    category: new FormControl(),
    account: new FormControl(),

    to_account: new FormControl(),
    sum: new FormControl(),
    fees: new FormControl(),
    date: new FormControl(this.dateService.dateToString(new Date())),
    description: new FormControl()
  })

  constructor(
    private dataService: DataService,
    private dateService: DateService,
    public transactionDataService: TransactionDataService) { }

  create() {
    if (this.newTransaction.value.type === "Expense")
      this.newTransaction.value.sum *= -1

    if (this.newTransaction.value.type !== "Transfer")
      this.newTransaction.value.to_account = null

    this.dataService.add("transactions", { ...this.newTransaction.value })       
  }
}
