import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeferService {
  getChartData(): Promise<{ data: any; options: any }> {
    return new Promise(resolve => {
      setTimeout(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--p-text-color');
        const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

        const data = {
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

        const options = {
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

        resolve({ data, options });
      }, 5000); // Simula una latencia de 2 segundos
    });
  }
}
