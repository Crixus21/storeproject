import { ProductRepository } from './../Model/product.repository';
import { Product } from './../Model/product.model';
import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@Component({
    templateUrl: 'productTable.component.html',
    imports : [CommonModule, RouterModule ],
    selector : 'app-producttable'

})

export class ProductTableComponent {
    constructor(private repository : ProductRepository) {

    }

    getProducts() : Product[] {
        return this.repository.getProducts();
    }

    deleteProduct(id? : number) {
        if(id) {
            this.repository.deleteProduct(id);
        }
        
    }
}