import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ITransactionCategory } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent implements OnInit {
  categories$!: Observable<ITransactionCategory[]>

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.categories$ = this.dataService.getAll("transaction_categories")
  }
}
