import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss']
})
export class CategoryCreateComponent implements OnInit {
  types$!: Observable<ITransactionType[]>
  newCategory: FormGroup = new FormGroup({
    type: new FormControl("Expense"),
    name: new FormControl(),
    budget: new FormControl()
  })
  
  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.types$ = this.dataService.getAll("transaction_types")
  }
  
  createCategory() {
    this.dataService.add("transaction_categories", { ...this.newCategory.value })
  }
}
