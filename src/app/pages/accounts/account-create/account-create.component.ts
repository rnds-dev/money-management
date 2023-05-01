import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
})
export class AccountCreateComponent {

  newAccount: FormGroup = new FormGroup({
    name: new FormControl(),
    sum: new FormControl(),
    description: new FormControl()
  })

  constructor(private dataService: DataService) { }

  onCreateAccount() {
    this.dataService.add("accounts", { ...this.newAccount.value })
  }
}