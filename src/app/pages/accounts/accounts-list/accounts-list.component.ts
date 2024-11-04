import { Component } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IAccount, IAccountType } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
})
export class AccountsListComponent {
  accounts$!: Observable<IAccount[]>
  accountTypes$!: Observable<IAccountType[]>
  errorMessage: string = "No errors"

  constructor(
    public modalService: ModalService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.accounts$ = this.dataService.getAll("accounts")
    this.accountTypes$ = this.dataService.getAll("account_types")
  }
}
