import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable()
export class AuthGuardService {
constructor(private router: Router) {}



  canActivate() {
        if (localStorage.getItem('username')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/loginadmin']);
        return false;
    }

}
