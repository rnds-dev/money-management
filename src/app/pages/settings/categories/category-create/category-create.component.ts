import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
    selector: 'app-category-create',
    templateUrl: './category-create.component.html',
    styleUrls: ['./category-create.component.scss'],
    standalone: false
})
export class CategoryCreateComponent {
  newCategory: FormGroup = new FormGroup({
    type: new FormControl("Expense"),
    name: new FormControl(),
    budget: new FormControl()
  })

  constructor(private dataService: DataService,
    public transactionDataService: TransactionDataService
  ) { }

  createCategory() {
    this.dataService.add("transaction_categories", { ...this.newCategory.value })
  }
}
