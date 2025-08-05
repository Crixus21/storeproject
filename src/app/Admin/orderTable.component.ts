import { Component } from "@angular/core";
import { Order } from "../Model/order.model";
import { OrderRepository } from "../Model/order.repository";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";



@Component({
  templateUrl : 'orderTable.component.html',
  standalone : true,
  selector : 'app-ordertable',
  imports : [ FormsModule, CommonModule ]
})

export class OrderTableComponent {
  includeShipped : boolean = false;
  
orders : Order[] = [];

  constructor(private repository : OrderRepository, private router : Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => { console.log("Navigation End event"); this.reload()});
  }

  reload() {
    this.repository.loadOrders().subscribe(() => this.updateOrders());
  }

  // getOrders() : Order[] {
  //   this.repository.loadOrders().subscribe(data => this.orders = this.repository.getOrders())
  //   return this.orders.filter(o => this.includeShipped || !o.shipped);
    
  // }

  updateOrders() {
    this.orders = this.repository.getOrders().filter(o => this.includeShipped || !o.shipped);
  }

  markShipped(order : Order) {
    order.shipped = true;
    this.repository.updateOrder(order).subscribe(() => this.updateOrders());
  }

  delete(id : number) {
    this.repository.deleteOrder(id).subscribe(() => this.updateOrders());
  }

}