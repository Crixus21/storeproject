import { Component } from '@angular/core';
import { Cart } from '../store/cart.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-cart-details',
  imports: [ RouterModule, CommonModule ],
  templateUrl: './cart-details.component.html',
  styleUrl: './cart-details.component.css'
})
export class CartDetailsComponent {
  constructor(public cart : Cart) {

  }


}
