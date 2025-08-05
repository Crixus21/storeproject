import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NgForm, FormsModule, NgModel } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { AuthService } from "../Model/auth.service";


@Component( {
    templateUrl : "auth.component.html",
    imports : [ CommonModule, FormsModule, RouterModule ]
}

)

export class AuthComponent {
    public username : string = "";
    public password : string = "";
    public errorMessage : string = "";

    constructor(private router : Router, private auth : AuthService) {
 
    }

    authenticate(form : NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.username, this.password).subscribe(response => {
                if(response) {
                    this.router.navigateByUrl('/admin/main');
                }
                this.errorMessage = "Authentication failed";
            })            
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}