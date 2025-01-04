import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-progress-bar-chart',
    templateUrl: './progress-bar-chart.component.html',
    styleUrls: ['./progress-bar-chart.component.scss'],
    standalone: false
})
export class ProgressBarChartComponent implements OnInit {

  public chart: any;
  mainColor = '#A3C8FF'

  @Input() status: number = 200
  @Input() budget: number = 1000

  ngOnInit(): void {
    this.chart = new Chart("chart", {
      type: 'bar',
      data: {
        datasets: [{
          data: [this.status],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
          ],
          borderWidth:    0,
          borderSkipped:  false,
          borderRadius:   10,
          barPercentage:  0.1,
        },
        { 
          data: [this.budget],
          barPercentage: 0,
          categoryPercentage: 0,
          hidden: true
          
        } // 100%
        ],
        labels: ['none'],

      },

      options: {
        animation: false,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          title:  { color: "#FFFFFF" },
        },
        indexAxis: 'y',
        scales: {
          x: {
            grid:   { display: false, },
            ticks:  { display: false, }
          },
          y: {
            min: 0,
            max: this.budget,
            ticks:  { display: false, }
          }
        }
      },
      plugins:[
        
      ]
    });


    // this.chart.defaults.color = '#fff';  
    this.updateChart()

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataIn'] && this.chart) {
      this.updateChart()
    }
  }

  updateChart() {
    // this.chart.data.datasets[0].data = Object.values(this.dataIn)
    // this.chart.data.labels = Object.keys(this.dataIn)
    // this.chart.update()
  }
}
