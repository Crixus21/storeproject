
import { Injectable } from "@angular/core";
import { Product } from "../Model/product.model";


@Injectable({
    providedIn: "root"
})

export class Cart {

    //Attributes
    public Lines : CartLine[] = [];
    public itemCount : number = 0;
    public cartPrice : number = 0;


    //Methods
    addLine (product : Product, quantity : number = 1) {
        let line = this.Lines.find(line =>  line.product.id == product.id);
        if (line != undefined) {
            line.quantity += quantity;
        } else {
            this.Lines.push(new CartLine(product, quantity));
        }
        this.recalculate();
    }

    updateQuantity(product : Product, quantity : number = 1) {
        let line = this.Lines.find(line => line.product.id == product.id);
        if(line != undefined) {
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(product : Product) {
        let index = this.Lines.findIndex( line => line.product.id == product.id);
        this.Lines.splice(index,1);
        this.recalculate();
    }

    clear () {
        this.Lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.Lines.forEach(i => {
            this.itemCount += i.quantity;
            this.cartPrice += i.product.price * i.quantity;
        });
    }



}

export class CartLine {
    constructor(public product : Product, public quantity : number) {

    }

    get lineTotal() {
        return this.quantity * this.product.price;
    }

}