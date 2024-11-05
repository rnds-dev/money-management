import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITransactionCategory } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category!: ITransactionCategory 
  formCategory: FormGroup = new FormGroup({
    type: new FormControl(),
    name: new FormControl(),
    budget: new FormControl()
  })

  constructor(private dataService: DataService,
    public transactionDataService: TransactionDataService
  ) {}

  ngOnInit(): void {
    this.formCategory.controls['type'].patchValue(this.category.type)
    this.formCategory.controls['name'].patchValue(this.category.name)
    this.formCategory.controls['budget'].patchValue(this.category.budget )
  }

  updateCategory(){    
    this.dataService.update("transaction_categories", this.category.id, {...this.formCategory.value})
  }

  delete() {
    this.dataService.delete("transaction_categories", this.category.id)
  }
}
