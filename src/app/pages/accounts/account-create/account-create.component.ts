import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IAccountType } from 'src/app/models/account';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
})
export class AccountCreateComponent implements OnInit{

  types$!: Observable<IAccountType[]>

  newAccount: FormGroup = new FormGroup({
    type: new FormControl('Cash', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    sum: new FormControl('', [Validators.pattern(/^\d*\.?\,?\d+$/)]),
    description: new FormControl()
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.types$ = this.dataService.getAll("account_types")
  }

  public onCreateAccount() {
    this.newAccount.controls['sum'].patchValue(this.newAccount.get('sum')?.value.replace(",", "."))
    this.dataService.add("accounts", { ...this.newAccount.value })     
  }

  public isInvalid(field : string) : boolean {
    return this.newAccount.get(field)!.invalid && this.newAccount.get(field)!.touched
  }
}