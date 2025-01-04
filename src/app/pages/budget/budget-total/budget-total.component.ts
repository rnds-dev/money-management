import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { map } from 'rxjs';
import { StatsService } from 'src/app/services/stats.service';

@Component({
    selector: 'app-budget-total',
    templateUrl: './budget-total.component.html',
    styleUrls: ['./budget-total.component.scss'],
    standalone: false
})
export class BudgetTotalComponent implements OnInit {
  public total = 0
  
  @Input() 
  public selectedPeriod: FormGroup = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  })
  
  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.statsService.getBudgetTotal(this.selectedPeriod)
      .pipe(map(res => this.total = res))
  }
}
