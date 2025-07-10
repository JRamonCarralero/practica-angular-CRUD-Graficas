import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductList } from './products/components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'product-manager';
}
