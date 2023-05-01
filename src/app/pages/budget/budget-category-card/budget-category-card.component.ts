import { Component, Input } from '@angular/core';
import { ITransactionCategory } from 'src/app/models/transaction';

@Component({
  selector: 'app-budget-category-card',
  templateUrl: './budget-category-card.component.html',
  styleUrls: ['./budget-category-card.component.scss']
})
export class BudgetCategoryCardComponent {
  @Input() category!: ITransactionCategory
  @Input() status: number = 0

  checkExcess() {
    if (this.category.budget! + this.status < 0) return 'Excess'
    return 'Balance'
  }
}
