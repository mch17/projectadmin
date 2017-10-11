import { Component, OnInit } from '@angular/core';
import { UsersmangService } from 'app/usersmanagm/usersmang.service';
import { User } from 'app/usersmanagm/user2.model';

@Component({
  selector: 'app-usermlist',
  templateUrl: './usermlist.component.html',
  styleUrls: ['./usermlist.component.css']
})
export class UsermlistComponent implements OnInit {
    errorMessage: string= 'error';

 users: User[];

  constructor(private UsersmangService: UsersmangService) { }

  ngOnInit() {
    this.getAllUserManaged();
  }


 getAllUserManaged() {
    this.UsersmangService.getAllUsersM()
      .subscribe(
      courses => this.users = courses,
      error => this.errorMessage = <any>error);
  }
}
