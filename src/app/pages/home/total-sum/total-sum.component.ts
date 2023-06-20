import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-total-sum',
  templateUrl: './total-sum.component.html',
  styleUrls: ['./total-sum.component.scss']
})
export class TotalSumComponent implements OnInit {
  public amount: number = 0
  public amountChange: number = 5000
  public percentageChange: number = 5

  constructor(private statsService: StatsService, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAll("accounts").forEach((accounts: IAccount[]) => {
      
      accounts.forEach(account => {
        this.amount += account.sum
      })
    })
    
  }


}
