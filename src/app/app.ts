import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ProductForm } from "./products/components/product-form/product-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, ProductForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'product-manager';
}
