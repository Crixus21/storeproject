import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "./static.datasource";
import { firstValueFrom, Observable, of, tap } from "rxjs";
import { RestDataSource } from "./rest.datasource";



@Injectable({
    providedIn: 'root'
})

export class OrderRepository {
    private orders : Order[] = [];
    private loaded : boolean = false;

    constructor(private datasource : RestDataSource) {

    }


    loadOrders() : Observable<Order[]> {
        if(!this.datasource.auth_token) {
            return of([]);
        }
        return this.datasource.getOrder().pipe(tap(orders => { this.orders = orders;}));
        
    }


    getOrders() : Order[] {
        return this.orders;
    }

    saveOrder(order : Order) : Observable<Order> {
        return this.datasource.saveOrder(order);
    }

    updateOrder(order : Order) : Observable<Order> {
        return this.datasource.updateOrder(order).pipe(tap(updatedOrder => {
            const index = this.orders.findIndex(ord => ord.id == order.id);
            if (index >= 0) {
                this.orders.splice(index, 1, updatedOrder);
            }
        }));
    }

    deleteOrder(id : number) : Observable<Order> {
        return this.datasource.deleteOrder(id).pipe(tap(() => {const index = this.orders.findIndex(ord => ord.id === id);
        if (index >= 0) this.orders.splice(index,1);
    }));
    }



}