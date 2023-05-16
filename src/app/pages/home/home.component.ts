import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: string = "Statistics"
  selectedPeriod: FormGroup = new FormGroup({})
  type: string = 'Budget'

  getSelectedPeriod(data: any) {
    this.selectedPeriod = data
  }
}
