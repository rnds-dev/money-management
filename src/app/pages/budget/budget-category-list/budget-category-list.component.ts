import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategoryStats, ITransactionCategory } from 'src/app/models/transaction';
import { StatsService } from 'src/app/services/stats.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-budget-category-list',
  templateUrl: './budget-category-list.component.html',
})
export class BudgetCategoryListComponent {
  @Input() selectedPeriod: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  })
  stats: ICategoryStats = {}

  constructor(public transactionDataService: TransactionDataService,
    private statsService: StatsService) { }

  ngOnInit(): void {
    this.getStats()
    this.selectedPeriod.valueChanges.subscribe(() => {
      this.getStats()
    })
  }

  getStats(){
    this.stats = this.statsService.getCategoryStats(this.selectedPeriod, 'Expense')   
  }
}
