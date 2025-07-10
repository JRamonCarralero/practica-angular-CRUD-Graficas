import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductForm } from '../product-form/product-form';
import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, TableModule, ButtonModule, ProductForm],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

  products = signal<Product[]>([]);
  editing = signal<Product | undefined>(undefined);

  constructor( private svc: ProductService ) { }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.svc.getAll().subscribe(list => this.products.set(list));
  }

  onEdit(product: Product): void {
    this.editing.set(product);
  }

  onNewProduct(): void {
    this.editing.set({id: undefined!, name: '', price: 0, description: '', stock: 0});
  }

  onSaved(): void {
    this.editing.set(undefined);
    this.load();
  }

  onDelete(id: string | null): void {
    if (!id) {
      console.warn('[DEBUG] onDelete aborted: no id');
      return;
    }
    if (confirm('Estas seguro de borrar el producto?')) {
      this.svc.delete(id).subscribe({
        next: () => this.load(),
        error: (err) => console.error(err)
      });
    }
  }
}
