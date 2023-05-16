import { Component, Input } from '@angular/core';
import { ITransaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
})
export class TransactionCardComponent {
  @Input() transaction!: ITransaction
  accountName: string = ""
  toAccountName: string = ""

  constructor(private dataService: DataService) { }

  get transactionCategory() : string {
    if (this.transaction.type === 'Transfer') return this.transaction.type
    return this.transaction.category
  }

  delete() {
    this.dataService.delete("transactions", this.transaction.id!)
  }
}
