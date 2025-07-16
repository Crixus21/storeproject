import { Provider } from "@angular/core";
import { StaticDataSource } from "../Model/static.datasource";
import { ProductRepository } from "../Model/product.repository";
import { Order } from "../Model/order.model";
import { OrderRepository } from "../Model/order.repository";
import { Cart } from "./cart.model";


export const  storeProviders : Provider[] = [
    StaticDataSource, ProductRepository, Order, OrderRepository, Cart
];