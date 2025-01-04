import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent {
  title = 'Budget'
  total = 0

  @Input() selectedPeriod: FormGroup = new FormGroup({})
}
