import { Component, OnInit, ChangeDetectorRef, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DeferService } from './defer-service';

@Component({
  selector: 'app-defer-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './defer-chart.html',
  styleUrl: './defer-chart.css'
})
export class DeferChart  implements OnInit {
  data = signal<any>(null);
  options = signal<any>(null);

  constructor(private deferService: DeferService) {}

  ngOnInit() {
    this.deferService.getChartData().then(chartData => {
      this.data.set(chartData.data);
      this.options.set(chartData.options);
    });
  }
}
