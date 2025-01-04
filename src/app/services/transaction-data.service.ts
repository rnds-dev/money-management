import { Injectable } from '@angular/core';
import { IAccount } from '../models/account';
import { ITransactionCategory, ITransactionType, ITypeStats } from '../models/transaction';
import { DataService } from './data.service';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionDataService {
  private accountsRequest$!: Observable<IAccount[]>
  private typesRequest$!: Observable<ITransactionType[]>
  private categoriesRequest$!: Observable<ITransactionCategory[]>

  private accounts: Array<IAccount> = []
  private types: Array<ITransactionType> = []
  private categories: Array<ITransactionCategory> = []

  constructor(private dataService: DataService) { }

  public get getAccounts() {
    if (!this.accountsRequest$) {
      this.accountsRequest$ = this.dataService.getAll("accounts").pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
    }
    if (!this.accounts || !this.accounts.length) {
      this.accountsRequest$.subscribe(body => this.accounts = body)
    }
    return this.accounts
  }

  public getAccountsObservable() : Observable<IAccount[]> {
    if (!this.accountsRequest$) {
      this.accountsRequest$ = this.dataService.getAll("accounts").pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
    }
    return this.accountsRequest$
  }

  public get getTypes() {
    if (!this.typesRequest$) {
      this.typesRequest$ = this.dataService.getAll("transaction_types").pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
      this.typesRequest$.subscribe(body => this.types = body)
    }
    if (!this.types || !this.types.length) {
      this.typesRequest$.subscribe(body => this.types = body)
    }
    return this.types
  }

  public getTypesObservable() : Observable<ITransactionType[]> {
    if (!this.typesRequest$) {
      this.typesRequest$ = this.dataService.getAll("transaction_types").pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
    }
    return this.typesRequest$
  }

  public get getCategories() {
    if (!this.categoriesRequest$) {
      this.categoriesRequest$ = this.dataService.getAll("transaction_categories").pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
    }
    if (!this.categories || !this.categories.length) {
      this.categoriesRequest$.subscribe(body => this.categories = body)
    }
    return this.categories
  }

  private getData(url: string, request$: Observable<any[]>, dataResponse: Array<any>) {
    if (!request$) {
      request$ = this.dataService.getAll(url).pipe(
        shareReplay({ bufferSize: 1, refCount: true })
      )
    }
    if (!dataResponse || !dataResponse.length) {
      request$.subscribe(body => dataResponse = body)
    }
    return dataResponse
  }
}