import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent implements OnInit {

  date: Date = new Date()
  startDate: Date = this.dateService.getStartMonth()
  endDate: Date = this.dateService.getEndMonth()

  period: FormGroup = new FormGroup({
    startDate: new FormControl(this.dateService.dateToString(this.startDate)),
    endDate:   new FormControl(this.dateService.dateToString(this.endDate)),
  })

  @Output() sendArrayToParent = new EventEmitter<any>();
  
  constructor(private dateService: DateService) {}
  
  ngOnInit(): void {
    this.onSelectedPeriodChange()
  }

  onSelectedPeriodChange() {
    this.sendArrayToParent.emit(this.period)
  }

  changePeriod(k: number) {
    this.startDate.setMonth(this.startDate.getMonth()+k)
    this.endDate.setMonth(this.endDate.getMonth()+k)

    this.period.controls['startDate'].patchValue(this.dateService.dateToString(this.startDate))
    this.period.controls['endDate'].patchValue(this.dateService.dateToString(this.endDate))
  }
}


