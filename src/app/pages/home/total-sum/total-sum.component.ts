import { Component, OnInit } from '@angular/core';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-total-sum',
  templateUrl: './total-sum.component.html',
  styleUrls: ['./total-sum.component.scss']
})
export class TotalSumComponent implements OnInit {
  public amount: number = 0
  public amountChange: number = 5000
  public percentageChange: number = 5

  constructor(private transactionDataService: TransactionDataService) { }

  ngOnInit(): void {
    this.transactionDataService
      .getAccountsObservable()
      .subscribe((accounts) => {
        this.amount = accounts.reduce((sum, account) => sum + account.sum, 0)
      })
  }
}
