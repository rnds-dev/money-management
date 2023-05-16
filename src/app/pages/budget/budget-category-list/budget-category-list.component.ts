import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICategoryStats, ITransactionCategory } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-budget-category-list',
  templateUrl: './budget-category-list.component.html',
})
export class BudgetCategoryListComponent {
  @Input() selectedPeriod: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  })
  categories$!: Observable<ITransactionCategory[]>
  stats: ICategoryStats = {}

  constructor(private dataService: DataService,
    private statsService: StatsService) { }

  ngOnInit(): void {
    this.categories$ = this.dataService.getAll("transaction_categories")

    this.getStats()
    this.selectedPeriod.valueChanges.subscribe(changes => {
      this.getStats()
    })
  }

  getStats(){
    this.stats = this.statsService.getCategoryStats(this.selectedPeriod, 'Expense')   
  }
}
