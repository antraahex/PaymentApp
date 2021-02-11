import { PaymentConfirmationComponent } from './payment-confirmation/payment-confirmation.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'paymentConfirm', component: PaymentConfirmationComponent },
  { path: '', redirectTo: '/paymentConfirm', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
