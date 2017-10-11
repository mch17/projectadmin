import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Quiz } from "app/user/lms-quiz/models";
@Injectable()
export class LmsQuizService {

 private QuizsUrl = 'http://localhost:8080/api/quiz/1';
  constructor(private http: Http) { }

    getQuizs(): Observable<Quiz> {
    // ...using get request
    return this.http.get(this.QuizsUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

}
