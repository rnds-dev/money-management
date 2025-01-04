import { Component, OnInit } from '@angular/core';
import { IAccount } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-account-view',
    templateUrl: './account-view.component.html',
    standalone: false
})
export class AccountViewComponent implements OnInit{
  account!: IAccount

  constructor(
    private dataService: DataService,
    private modalService: ModalService,
    ) { }

  ngOnInit(): void {
    this.account = this.modalService.data
  }

  onCloseModal() {
    this.modalService.close()
  }

  onDeleteAccount() {
    this.dataService.delete("accounts", this.account.id!)
  }

  onUpdateAccount() { 
    this.dataService.update("accounts", this.account.id!, this.account)
  }
}
