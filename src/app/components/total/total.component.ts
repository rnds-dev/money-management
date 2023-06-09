import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ITypeStats } from 'src/app/models/transaction';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
})
export class TotalComponent implements OnInit {
  @Input() selectedPeriod: FormGroup = new FormGroup({})

  stats: ITypeStats = {}

  constructor(private statsService: StatsService) {}

  ngOnInit(): void {
    this.getStats()
    this.selectedPeriod.valueChanges.subscribe(changes => {
      this.getStats()
    })
  }

  getStats(){
    this.stats = this.statsService.getTypeStats(this.selectedPeriod)
  }
}
