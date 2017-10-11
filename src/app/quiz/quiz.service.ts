import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Quiz } from "./quiz.modal";

@Injectable()
export class QuizService {
  private QuizsUrl = 'http://localhost:8080/api/quiz';
  constructor(private http: Http) { }



  createQuiz(body: Object): Observable<Quiz[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.QuizsUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
  }


  getQuizs(): Observable<Quiz[]> {
    // ...using get request
    return this.http.get(this.QuizsUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }


  findQuizById(id: number): Observable<Quiz> {
    return this.http.get(`${this.QuizsUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

}
