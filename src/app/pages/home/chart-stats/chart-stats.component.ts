import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategoryStats, ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';

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
  transactionTypes$!: Observable<ITransactionType[]>

  constructor(private statsService: StatsService,
    private dataService: DataService) {}

  ngOnInit(): void {
    this.transactionTypes$ = this.dataService.getAll("transaction_types")
    
    this.getStats()
    this.selectedPeriod.valueChanges.subscribe(changes => {
      this.getStats()
    })
  }

  getStats(){
    this.stats = this.statsService.getCategoryStats(this.selectedPeriod, this.selectedType)   
  }
}
