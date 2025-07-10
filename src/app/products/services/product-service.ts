import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private API = 'http://localhost:3000/products';

  constructor( private http: HttpClient ) { }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API}/${id}`);
  }

  create(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(this.API, product);
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.API}/${product.id}`, product);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
