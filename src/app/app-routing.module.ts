import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from 'src/app/views/admin-views/payment/payment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'payments',
    pathMatch: 'full'
  },
  {
    path: 'orders',
    loadChildren: () => import('./views/admin-views/orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'payments',
    component: PaymentComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
