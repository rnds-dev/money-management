import { Component,  } from '@angular/core';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
})
export class CategoriesListComponent {
  constructor(public transactionDataService: TransactionDataService) { }
}
