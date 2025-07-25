import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { StaticDataSource } from "./static.datasource";

@Injectable({
    providedIn : 'root'
})
export class ProductRepository {
    private products : Product[] = [];
    private categories : string[] = [];

    constructor(private datasource : StaticDataSource) {
        datasource.getProducts().subscribe(data =>
            { 
                this.products = data;
                this.categories = data.map(p => p.category)
                .filter((c): c is string => c !== undefined)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
            }
        );
    }

    getProducts(category ?: string | null) : Product[] {
        return this.products.filter(p => category == "" || category == p.category);
    }

    getProduct(id : number) : Product | undefined {
        return this.products.find(p => p.id == id);
    }

    getCategories() : string[] {
        return this.categories;
    }


}
