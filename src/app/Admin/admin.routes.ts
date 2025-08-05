import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth.component";
import { AuthGuard } from "./auth.guard";
import { ProductEditorComponent } from "./productEditor.component";
import { ProductTableComponent } from "./productTable.component";
import { OrderTableComponent } from "./orderTable.component";


export const adminRoutes : Routes = [ 
        { path: '', redirectTo: "auth", pathMatch: "full" },
        { path: "main", component: AdminComponent, canActivate : [AuthGuard],
            children : [
                { path : "products/:mode/:id", component : ProductEditorComponent },
                { path : "products/:mode", component : ProductEditorComponent },
                { path : "products", component : ProductTableComponent },
                { path : "orders", component : OrderTableComponent },
                { path : "**", redirectTo : "products" }
            ]
        },
        { path: "auth", component: AuthComponent },
        { path: "**", redirectTo: "", pathMatch: "full" }
    ]



