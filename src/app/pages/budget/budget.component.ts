import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
  title = 'Budget'
  total = 0

  @Input() selectedPeriod: FormGroup = new FormGroup({})

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.getTotal()
  }

  getTotal() {
    this.total = this.statsService.getBudgetTotal(this.selectedPeriod)
    return 0
  }
}
