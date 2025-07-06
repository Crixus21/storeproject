import { Component, OnInit } from '@angular/core';
import { Cart } from '../store/cart.model';
import { CommonEngine } from '@angular/ssr/node';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart-summary',
  imports: [ CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  constructor ( public cart : Cart) {
    
  }


  ngOnInit(): void {
    
  }
  
}
