import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Simula un fetch que tarda 2 segundos en responder
  getDataWithDelay(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = {
          message: 'Datos cargados después de una espera'
        };
        resolve(data);
      }, 20); // 2000 milisegundos = 2 segundos
    });
  }
}
