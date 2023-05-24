import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
})
export class AccountCreateComponent {

  newAccount: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    sum: new FormControl('', [Validators.pattern(/^\d*\.?\,?\d+$/)]),
    description: new FormControl()
  })

  constructor(private dataService: DataService) { }

  public onCreateAccount() {
    this.newAccount.controls['sum'].patchValue(this.newAccount.get('sum')?.value.replace(",", "."))
    this.dataService.add("accounts", { ...this.newAccount.value })     
  }

  public isInvalid(field : string) : boolean {
    return this.newAccount.get(field)!.invalid && this.newAccount.get(field)!.touched
  }
}