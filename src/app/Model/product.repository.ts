import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable({
    providedIn : 'root'
})
export class ProductRepository {
    private products : Product[] = [];
    private categories : string[] = [];

    constructor(private datasource : RestDataSource) {
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
        return this.products.filter(p => !category || category == p.category);
    }

    getProduct(id : number) : Product | undefined {
        return this.products.find(p => p.id == id);
    }

    getCategories() : string[] {
        return this.categories;
    }

    saveProduct(product : Product) {
        if(product.id == null || product.id == 0) {
            this.datasource.saveProduct(product).subscribe(p => this.products.push(p));
        } else {
            this.datasource.updateProduct(product).subscribe(p => this.products.splice(this.products.findIndex(pr => p.id == pr.id),1,p));
        }
    }

    deleteProduct(id : number) {
        this.datasource.deleteProduct(id).subscribe(p => {
            this.products.splice(this.products.findIndex(pr => pr.id == id), 1)
        });
    }



}
