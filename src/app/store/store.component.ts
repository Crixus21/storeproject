import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.model';
import { storeProviders } from './store.providers';
import { ProductRepository } from '../Model/product.repository';
import { CommonModule } from '@angular/common';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { Cart } from './cart.model';
import { cartSharedImports } from './cartSharedImports';

@Component({
  standalone: true,
  selector: 'app-store',
  imports: [ CommonModule, CartSummaryComponent, ...cartSharedImports ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
  providers: [ storeProviders ]

})
export class StoreComponent implements OnInit {

  public selectedCategory : string = "";
  public productsPerPage = 4;
  public selectedPage = 1;


  constructor(private repository : ProductRepository, private cart : Cart) {

  }

  ngOnInit(): void {
    
  }

  get products() : Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);

  }

  get categories() : string[] {
    return this.repository.getCategories();
  }

  changeCategory(newCategory? : string) {
    if(newCategory) {
        this.selectedCategory = newCategory;
      }
    else {
        this.selectedCategory = "";
      }

      // console.log('selectedCategory:', JSON.stringify(this.selectedCategory));
  }

  changePage(newPage : number) {
    this.selectedPage = newPage;
  }

  changePageSize(event : Event | null) {
    if(event) {
      this.productsPerPage = Number((event.target as HTMLSelectElement).value);
      // this.changeCategory(this.categories[1]);
    }
  }

get pageNumbers() : number[] {
  return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)).fill(0).map((x,i) => i+1);
}

addProductToCart (product : Product) {
  this.cart.addLine(product);
}


}
