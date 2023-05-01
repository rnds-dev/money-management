import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { ITransactionCategory, ITransactionType } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit, OnChanges {
  @Input() category!: ITransactionCategory 
  types$!: Observable<ITransactionType[]>
  formCategory: FormGroup = new FormGroup({
    type: new FormControl(),
    name: new FormControl(),
    budget: new FormControl()
  })

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.types$ = this.dataService.getAll("transaction_types")
    this.formCategory.controls['type'].patchValue(this.category.type)
    this.formCategory.controls['name'].patchValue(this.category.name)
    this.formCategory.controls['budget'].patchValue(this.category.budget )
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  updateCategory(){    
    this.dataService.update("transaction_categories", this.category.id, {...this.formCategory.value})
  }

  delete() {
    this.dataService.delete("transaction_categories", this.category.id)
  }
}
