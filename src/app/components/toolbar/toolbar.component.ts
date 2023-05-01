import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  date: Date = new Date()
  startDate: Date = new Date(this.date.getFullYear(), this.date.getMonth(), 2)
  endDate: Date = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 1)

  period: FormGroup = new FormGroup({
    startDate: new FormControl(this.dateToString(this.startDate)),
    endDate:   new FormControl(this.dateToString(this.endDate)),
  })

  @Output() sendArrayToParent = new EventEmitter<any>();
  
  ngOnInit(): void {
    this.onSelectedPeriodChange()
  }

  onSelectedPeriodChange() {
    this.sendArrayToParent.emit(this.period)
  }

  changePeriod(k: number) {
    this.startDate.setMonth(this.startDate.getMonth()+k)
    this.endDate.setMonth(this.endDate.getMonth()+k)

    this.period.controls['startDate'].patchValue(this.dateToString(this.startDate))
    this.period.controls['endDate'].patchValue(this.dateToString(this.endDate))
  }

  dateToString(date: Date) : string {
    return date.toISOString().split('T')[0]
  }
}


