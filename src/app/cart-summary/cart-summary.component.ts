import { Component, OnInit } from '@angular/core';
import { Cart } from '../store/cart.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart-summary',
  imports: [ CommonModule, RouterModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
  providers: [ ]
})
export class CartSummaryComponent implements OnInit {

  constructor ( public cart : Cart) {
    
  }


  ngOnInit(): void {
    
  }
  
}
