import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models/account';
import { ITransaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
})
export class TransactionCardComponent implements OnInit {
  @Input() transaction!: ITransaction
  accountName: string = ""
  toAccountName: string = ""

  accounts: IAccount[] = []

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAll("accounts").subscribe(data => {
      this.accounts = data
    })

    this.initAccountsNames()
  }

  initAccountsNames() {
    // const n :number = this.transaction.account
    // this.accountName = this.accounts[this.transaction.account]
    // this.dataService.get("accounts", this.transaction.account).subscribe(data => {
    //   this.accountName = data.name
    // })

    // if (this.transaction.to_account!=undefined)
    // this.dataService.get("accounts", this.transaction.to_account).subscribe(data => {
    //   this.toAccountName = data.name
    // })
  }

  get transactionCategory() : string {
    if (this.transaction.type === 'Transfer') return this.transaction.type
    return this.transaction.category
  }

  edit(){

  }

  delete() {
    this.dataService.delete("transactions", this.transaction.id!)
  }
}
