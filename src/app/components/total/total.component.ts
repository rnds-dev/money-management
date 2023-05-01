import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICategoryStats, ITypeStats, ITransaction } from 'src/app/models/transaction';
import { DataService } from 'src/app/services/data.service';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
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
