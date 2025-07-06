import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable, from } from "rxjs";


@Injectable()
export class StaticDataSource {
    private products : Product[] = [ 
        new Product(1, 'Flyraom shoe', 'Category 1', 'Lorem ipsos', 101),
        new Product(2, 'T-shirt', 'Category 1', 'Lorem ipsos', 47),
        new Product(3, 'Cooler', 'Category 1', 'Lorem ipsos', 76),
        new Product(4, 'Graphic t-shirt', 'Category 1', 'Lorem ipsos', 60),
        new Product(5, 'Euphoria 100 ml', 'Category 2', 'Lorem ipsos', 45),
        new Product(6, 'Eternity Moment 100ml', 'Category 2', 'Lorem ipsos', 23),
        new Product(7, 'Flower pink 100ml', 'Category 2', 'Lorem ipsos', 34),
        new Product(8, 'Musk EDC 59ml', 'Category 2', 'Lorem ipsos', 99),
        new Product(9, 'Something', 'Category 1', 'Lorem ipsos', 87),
        new Product(10, 'New Shirt', 'Category 1', 'Lorem ipsos', 57),
        new Product(11, 'Lorem sfdsdf', 'Category 3', 'Lorem ipsos', 63),


    ];

    getProducts() : Observable<Product[]> {
        return from([this.products]);
    }
}
