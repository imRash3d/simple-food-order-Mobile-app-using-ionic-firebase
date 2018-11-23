import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './page/home/home.module#HomePageModule'
  },
  { path: 'product-list', loadChildren: './page/product-list/product-list.module#ProductListPageModule' },
  { path: 'product-details', loadChildren: './page/product-details/product-details.module#ProductDetailsPageModule' },
  { path: 'order', loadChildren: './page/order/order.module#OrderPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
