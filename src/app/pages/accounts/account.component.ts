import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//services
import { ModalService } from 'src/app/services/modal.service';
import { DataService } from 'src/app/services/data.service';

//models
import { IAccount } from 'src/app/models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
})
export class AccountComponent{
  title = 'Accounts'
  
  constructor(
    public modalService: ModalService,
    ) { }

}
