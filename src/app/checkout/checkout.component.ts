import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderRepository } from '../Model/order.repository';
import { Order } from '../Model/order.model';





@Component({
  selector: 'app-checkout',
  imports: [ CommonModule, RouterModule, FormsModule ],  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers : [ ]
})


export class CheckoutComponent {
  orderSent : boolean = false;
  submitted : boolean = false;

  constructor (public order : Order, public repository : OrderRepository ) {

  }

  submitOrder( form : NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
      
    }

  }



}
