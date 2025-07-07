import { Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './storefirst.guard';

export const routes: Routes = [
    { path:"store", component : StoreComponent, canActivate: [ StoreFirstGuard] },
    { path: "cart", component: CartDetailsComponent, canActivate: [StoreFirstGuard] },
    { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard] },
    { path: "**", redirectTo: "/store" }

];
