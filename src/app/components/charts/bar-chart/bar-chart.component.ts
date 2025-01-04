import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { ICategoryStats } from 'src/app/models/transaction';
Chart.register(...registerables);


@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    standalone: false
})
export class BarChartComponent implements OnInit, OnChanges {

  public chart: any;
  mainColor = '#A3C8FF'

  @Input() 
  public dataIn: ICategoryStats = {}


  ngOnInit(): void {
    this.chart = new Chart("chart", {
      type: "bar",
      data: {
        datasets: [{
          data: [],
          backgroundColor: this.mainColor,
          hoverBackgroundColor: this.mainColor,
          categoryPercentage: 0.1,
          // barPercentage: 1,
          // borderRadius: Number.MAX_VALUE,
          indexAxis: 'y',
        }],
        labels: [],
      },
      
      options: {
        // animation: false,
        maintainAspectRatio: false,
        plugins: {
          
          legend: {
            display: false
          },
          title: {
            color: "#FFFFFF"
            
          }
        },
        
        // scales: {
        //   myScale: {
        //     x
        //   }
        // }

      }
    }); 
    

    // this.chart.defaults.color = '#fff';  
    this.updateChart()

  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['dataIn'] && this.chart) {
      // console.log("ngOnChanges");
      // console.log("DataIn: ", this.dataIn);
     
      this.updateChart()
    }
  }

  updateChart() {
    // console.log("updateChart");
    // console.log(this.dataIn);

    this.chart.data.datasets[0].data = Object.values(this.dataIn)
    this.chart.data.labels = Object.keys(this.dataIn)
    this.chart.update()
  }
}


