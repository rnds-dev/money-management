import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ITransactionCategory } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-budget-category-create',
  templateUrl: './budget-category-create.component.html',
  styleUrls: ['./budget-category-create.component.scss']
})
export class BudgetCategoryCreateComponent implements OnInit {
  categories$!: Observable<ITransactionCategory[]>
  newBudgetCategory: FormGroup = new FormGroup({
    id: new FormControl(),
    budget: new FormControl(),
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.categories$ = this.dataService.getAll("transaction_categories")
  }

  create(){
    this.dataService.update("transaction_categories", this.newBudgetCategory.value.id, {...this.newBudgetCategory.value})
  }
}
