import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models/account';
import { ICategoryStats, ITransaction, ITransactionCategory, ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = "Statistics"
  selectedPeriod: FormGroup = new FormGroup({})
  type: string = 'Budget'

  getSelectedPeriod(data: any) {
    this.selectedPeriod = data
  }
}
