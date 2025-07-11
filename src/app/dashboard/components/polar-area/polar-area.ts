import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, ChangeDetectorRef, inject, effect } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-polar-area',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './polar-area.html',
  styleUrl: './polar-area.css'
})
export class PolarArea implements OnInit {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        datasets: [
          {
            data: [11, 16, 14, 8, 3],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-pink-500'),
              documentStyle.getPropertyValue('--p-gray-500'),
              documentStyle.getPropertyValue('--p-orange-500'),
              documentStyle.getPropertyValue('--p-purple-500'),
              documentStyle.getPropertyValue('--p-cyan-500')
            ],
            label: 'Ventas anuales'
          }
        ],
        labels: ['2025', '2024', '2023', '2022', '2021']
      };

      this.options = {
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          r: {
            grid: {
              color: surfaceBorder
            }
          }
        }
      };
      this.cd.markForCheck()
    }
  }
}
