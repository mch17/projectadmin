import { Component, OnInit } from '@angular/core';
import { UsersmangService } from 'app/usersmanagm/usersmang.service';
import { User } from 'app/usersmanagm/coucou';
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    successMessage: string;
    errorMessage: string;
    user = new User();

  constructor(private UsersmangService: UsersmangService, private router: Router) { }

 ngOnInit() {
   
  }


  clear() {}

 

  save() {
    this.successMessage = '';
    this.errorMessage = '';


    this.UsersmangService.createUSerrsM(this.user)
      .subscribe(user => {
        this.successMessage = 'user was created!';
        console.log('user was created');
        console.log(user);
            this.router.navigate(['userml']);

        //  location.reload();
      });

}


}
