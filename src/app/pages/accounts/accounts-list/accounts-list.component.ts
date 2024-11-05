import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount, IAccountType } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
})
export class AccountsListComponent {
  accounts$!: Observable<IAccount[]>
  accountTypes$!: Observable<IAccountType[]>

  constructor(
    public modalService: ModalService,
    private dataService: DataService,
    public transactionDataService: TransactionDataService
    ) { }

  ngOnInit(): void {
    this.accountTypes$ = this.dataService.getAll("account_types")
  }
}
