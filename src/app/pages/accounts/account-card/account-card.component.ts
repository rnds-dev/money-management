import { Component, Input } from '@angular/core';
import { IAccount } from 'src/app/models/account';

@Component({
    selector: 'app-account-card',
    templateUrl: './account-card.component.html',
    standalone: false
})
export class AccountCardComponent {
  @Input() account!: IAccount
}
