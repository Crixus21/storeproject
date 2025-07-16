import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class OrderRepository {
    private orders : Order[] = [];

    constructor(private datasource : StaticDataSource) {

    }

    getOrders( ) : Order[] {
        return this.orders;
    }

    saveOrder(order : Order) : Observable<Order> {
        return this.datasource.saveOrder(order);
    }


}