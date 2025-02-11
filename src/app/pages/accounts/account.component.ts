import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    standalone: false
})
export class AccountComponent{
  title = 'Accounts'
  
  constructor(public modalService: ModalService) {}
}
