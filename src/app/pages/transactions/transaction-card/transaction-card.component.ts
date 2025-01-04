import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ITransaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { DateService } from 'src/app/services/date.service';
import { TransactionDataService } from 'src/app/services/transaction-data.service';

@Component({
    selector: 'app-transaction-card',
    templateUrl: './transaction-card.component.html',
    standalone: false
})
export class TransactionCardComponent implements OnInit {
  @Input() transaction!: ITransaction

  public editMode: boolean = false
  public isExists: boolean = true

  public transactionForm: FormGroup = new FormGroup({
    type: new FormControl(),
    category: new FormControl(),
    account: new FormControl(),
    to_account: new FormControl(),
    sum: new FormControl(),
    fees: new FormControl(),
    date: new FormControl(),
    description: new FormControl(),
  })

  constructor(private dataService: DataService,
    public dateService: DateService,
    public transactionDataService: TransactionDataService) { }

  get transactionCategory(): string {
    if (this.transactionForm.get('type')?.value === 'Transfer') return 'Transfer'
    return this.transactionForm.get('category')?.value
  }

  public ngOnInit() {
    this.setForm()
  }

  public openEditMode(): void {
    this.editMode = true
  }

  private closeEditMode(): void {
    this.editMode = false
  }

  private setForm() {
    this.transactionForm.patchValue({
      type: this.transaction.type,
      category: this.transaction.category,
      account: this.transaction.account,
      to_account: this.transaction.to_account,
      sum: this.transaction.sum,
      fees: this.transaction.fees,
      date: this.transaction.date,
      description: this.transaction.description,
    })
  }

  delete() {
    this.dataService.delete("transactions", this.transaction.id!)
    this.isExists = false
  }

  save() {
    this.dataService.update("transactions", this.transaction.id!, { ...this.transactionForm.value })
    this.closeEditMode()
  }
}
