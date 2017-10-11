import { Component, OnInit } from '@angular/core';
import { LoginadminService } from 'app/usersmanagm/loginAdmin/loginadmin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent{

 


  constructor(private router: Router, private loginService: LoginadminService) {
  }

  login(event, username, password) {
    console.log('hello        ' + username)
    event.preventDefault();
    this.loginService.login3(username, password)
      .subscribe(() => {
        this.router.navigate(['cours']);
      }, this.handleError);
  }

  

  handleError(error) {
    console.log(error.status);
  }



    logout() {


        localStorage.clear();
        this.router.navigate(['/login']);


    }

    isLogged() {

        if (localStorage.getItem('username')) {

            return true;
        } else {
            return false;
        }

    }
}
