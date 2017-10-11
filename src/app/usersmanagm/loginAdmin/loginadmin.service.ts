import { Injectable } from '@angular/core';
import { Response } from "@angular/http";
import { Headers, Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
@Injectable()
export class LoginadminService {
 public token: string;
  private loggedIn: boolean = false;
  public currentUser: string;
  private authUrl: string = 'http://localhost:8080/api/authenticate';

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
    //  this.loggedIn = !!localStorage.getItem('auth_token');
  }

  login3(username: string, password: string): Observable<boolean> {
    let loginRequest = JSON.stringify({ username: username, password: password });
    let headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });
    return this.http.post('http://localhost:8080/api/authenticate', loginRequest, { headers: headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let token = response.json() && response.json().id_token;
        if (token) {
          // set token property
          this.token = token;
          console.log("token+++++++++++++++++" + token)
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          //     console.log("eeeeeeeeeee+"+JSON.stringify({   username: username, token: token }));
          //   localStorage.setItem('auth_token',token);
          // return true to indicate successful login
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      });
  }
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }
  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
  isSignedIn(): boolean {
    return localStorage.getItem('jwt') !== null;
  }


}
