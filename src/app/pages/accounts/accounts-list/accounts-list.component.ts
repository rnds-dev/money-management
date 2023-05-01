import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccount } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
})
export class AccountsListComponent {
  accounts$!: Observable<IAccount[]>

  constructor(
    public modalService: ModalService,
    private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.accounts$ = this.dataService.getAll("accounts")
  }
}
