import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { DataService } from './defer-service';

@Component({
  selector: 'app-horizontal-bar',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './horizontal-bar.html',
  styleUrl: './horizontal-bar.css'
})
export class HorizontalBar implements OnInit {
  data: any;
  newData = signal<any | undefined>(undefined);
  deferData = signal<any | undefined>(undefined);

  options: any;

  platformId = inject(PLATFORM_ID);



  constructor(private cd: ChangeDetectorRef, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getDataWithDelay().then(response => {
      this.deferData.set(response);
      this.initChart();
      const documentStyle = getComputedStyle(document.documentElement);
      this.newData.set({
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Productos de interior',
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Productos de exterior',
            backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            data: [28, 48, 40, 19, 86, 77, 90]
          }
        ]
      });
    });
  }

  initChart() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
          {
            label: 'Productos de interior',
            backgroundColor: documentStyle.getPropertyValue('--p-cyan-500'),
            borderColor: documentStyle.getPropertyValue('--p-cyan-500'),
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: 'Productos de exterior',
            backgroundColor: documentStyle.getPropertyValue('--p-gray-500'),
            borderColor: documentStyle.getPropertyValue('--p-gray-500'),
            data: [28, 48, 40, 19, 86, 77, 90]
          }
        ]
      };

      this.options = {
        indexAxis: 'y',
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 500
              }
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.cd.markForCheck()
    }
  }
}
