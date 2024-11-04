import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from '../models/account';
import { ITransactionCategory, ITransactionType } from '../models/transaction';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {
  private accounts$!: Observable<IAccount[]>
  private types$!: Observable<ITransactionType[]>
  private categories$!: Observable<ITransactionCategory[]>
  
  constructor(private dataService: DataService) { }

  public get accounts() {
    if (!this.accounts$) {
      this.accounts$ = this.dataService.getAll("accounts")
    }
    return this.accounts$
  }

  public get types() {
    if (!this.types$) {
      this.types$ = this.dataService.getAll("transaction_types")
    }
    return this.types$
  }

  public get categories() {
    if (!this.categories$) {
      this.categories$ = this.dataService.getAll("transaction_categories")
    }
    return this.categories$
  }
}
