import { Injectable } from '@angular/core';
import {ResponseContentType, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Support } from 'app/cours/support.modal';

@Injectable()
export class SupportCoursService {
  private SupportUrl = 'http://localhost:8080/api/allsupportcours/18';

  constructor(private http: Http) { }



  getAllSupports(): Observable<Support[]> {
    // ...using get request
    return this.http.get(this.SupportUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  
}
