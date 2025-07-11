import { Routes } from '@angular/router';
import { ProductList } from './products/components/product-list/product-list';
import { Home } from './home/components/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList },
  { path: 'dashboard', component: ProductList },
];
