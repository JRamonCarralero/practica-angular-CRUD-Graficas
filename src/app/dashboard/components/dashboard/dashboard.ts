import { Component } from '@angular/core';
import { HorizontalBar } from '../horizontal-bar/horizontal-bar';
import { Doughnut } from '../doughnut/doughnut';
import { PolarArea } from '../polar-area/polar-area';
import { DeferChart } from "../defer-chart/defer-chart";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HorizontalBar, Doughnut, PolarArea, DeferChart],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
