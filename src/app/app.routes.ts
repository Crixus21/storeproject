import { Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
    { path:"store", component : StoreComponent },
    { path: "cart", component: CartDetailsComponent },
    { path: "checkout", component: CheckoutComponent },
    { path: "**", redirectTo: "/store" }

];
