import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../Model/auth.service';
import { Router } from '@angular/router';



@Component({
    templateUrl: "admin.component.html",
    imports : [ RouterOutlet, RouterModule ]

})

export class AdminComponent {
    constructor(private auth : AuthService, private router : Router) {

    }

    logout() {
        this.auth.clear();
        this.router.navigateByUrl('/');
    }
}