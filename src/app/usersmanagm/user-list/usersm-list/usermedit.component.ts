import { Component, OnInit } from '@angular/core';
import { UsersmangService } from 'app/usersmanagm/usersmang.service';
import { Subscription } from 'rxjs/Rx';
import { User } from 'app/usersmanagm/user2.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usermedit',
  templateUrl: './usermedit.component.html',
  styleUrls: ['./usermedit.component.css']
})
export class UsermeditComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  varGlobal: any;
  subscription: Subscription;
  user: User;
  constructor(private UsersmangService: UsersmangService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


    this.subscription = this.route.params.subscribe((params: any) => {
      this.varGlobal = params['login'];
      this.UsersmangService.findUserBylogin(this.varGlobal).subscribe(user => {
        this.user = user;
      });
    });
  }

  updateUser() {
    this.successMessage = '';
    this.errorMessage = '';

    this.UsersmangService.updateUser(this.user)
      .subscribe(
      challenge => {
        this.successMessage = 'user was updated.';
        console.log('user was updated');
        this.router.navigate(['/userml']);


      },
      err => {
        this.errorMessage = err;
        console.error(err);
      }
      );
  }



}
