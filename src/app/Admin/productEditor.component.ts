import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Component } from "@angular/core";
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../Model/product.model';
import { ProductRepository } from '../Model/product.repository';


@Component({
    templateUrl : 'productEditor.component.html',
    selector : 'app-producteditor',
    imports : [ FormsModule, RouterModule ]
})

export class ProductEditorComponent {
    editing : boolean = false;
    product : Product = new Product();


    constructor(private repository : ProductRepository, private router : Router, activatedRoute : ActivatedRoute) {
        this.editing = activatedRoute.snapshot.params["mode"] == "edit";
        if(this.editing) {
            Object.assign(this.product, repository.getProduct(activatedRoute.snapshot.params["id"]));
        }
    }

    save(form : NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }


}
