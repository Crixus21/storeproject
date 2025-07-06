import { Provider } from "@angular/core";
import { StaticDataSource } from "../Model/static.datasource";
import { ProductRepository } from "../Model/product.repository";


export const  storeProviders : Provider[] = [
    StaticDataSource, ProductRepository 
];