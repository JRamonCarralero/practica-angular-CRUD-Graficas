import { CommonModule } from '@angular/common';
import { Component, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputNumberModule } from 'primeng/inputnumber';

import { Product } from '../../models/product-model';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-form',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, InputGroupModule, InputGroupAddonModule, InputNumberModule],
  templateUrl: './product-form.html',
  styleUrl: './product-form.css'
})
export class ProductForm implements OnChanges {

  @Input() selectedProduct?: Product;

  @Output() create = new EventEmitter<void>();
  @Output() update = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string>('', Validators.required),
    price: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
    description: new FormControl<string>('', Validators.required),
    stock: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
  });

  constructor( private svc: ProductService ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedProduct'] && this.selectedProduct) {
      this.form.patchValue(this.selectedProduct);
    }
  }

  onSubmit() {
    if (this.form.invalid) return;

    const id = this.form.get('id')?.value as string | null;
    const name = this.form.get('name')?.value as string;
    const price = this.form.get('price')?.value as number;
    const description = this.form.get('description')?.value as string;
    const stock = this.form.get('stock')?.value as number;

    if (this.form.get('id')?.value) {
      this.svc.update({ id, name, price, description, stock }).subscribe(() => {
        this.update.emit();
      });
    } else {
      this.svc.create({ name, price, description, stock }).subscribe(() => {
        this.create.emit();
      });
    }
  }

  resetAndEmitCreate() {
    this.form.reset({ id: null, name: '', price: 0, description: '', stock: 0 });
    this.create.emit();
  }

  resetAndEmitUpdate() {
    this.form.reset({ id: null, name: '', price: 0, description: '', stock: 0 });
    this.update.emit();
  }

  onCancel() {
    this.form.reset({ id: null, name: '', price: 0, description: '', stock: 0 });
    this.cancel.emit();
  }
}
