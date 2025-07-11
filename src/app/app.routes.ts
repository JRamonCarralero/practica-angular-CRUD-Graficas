import { Routes } from '@angular/router';
import { ProductList } from './products/components/product-list/product-list';
import { Home } from './home/components/home/home';
import { Dashboard } from './dashboard/components/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products', component: ProductList },
  { path: 'dashboard', component: Dashboard },
];
