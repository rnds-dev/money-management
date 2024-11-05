import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategoryStats, ITransactionType } from 'src/app/models/transaction';
import { StatsService } from 'src/app/services/stats.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-chart-stats',
  templateUrl: './chart-stats.component.html',
  styleUrls: ['./chart-stats.component.scss']
})
export class ChartStatsComponent {

  @Input() selectedPeriod: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  })

  selectedType: string = 'Expense'
  stats: ICategoryStats = {}

  constructor(private statsService: StatsService,
    public transactionDataService: TransactionDataService) {}

  ngOnInit(): void {
    this.getStats()
    this.selectedPeriod.valueChanges.subscribe(() => {
      this.getStats()
    })
  }

  getStats(){
    this.stats = this.statsService.getCategoryStats(this.selectedPeriod, this.selectedType)   
  }
}
