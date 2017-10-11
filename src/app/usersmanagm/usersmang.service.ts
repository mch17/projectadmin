import { Injectable } from '@angular/core';
import {ResponseContentType, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Support } from 'app/cours/support.modal';
import { User } from 'app/usersmanagm/user2.model';

@Injectable()
export class UsersmangService {

  



 private UsersmUrl = 'http://localhost:8080/api/users';

  constructor(private http: Http) { }
  createUSerrsM(body: Object): Observable<User[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.UsersmUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }




 getAllUsersM(): Observable<User[]> {
    // ...using get request
    return this.http.get(this.UsersmUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

    
  findUserBylogin(login: string): Observable<User> {
    return this.http.get(`${this.UsersmUrl}/${login}`).map((res: Response) => {
      return res.json();
    });
  }

   updateUser(body: Object): Observable<User[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(this.UsersmUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


   }


}
