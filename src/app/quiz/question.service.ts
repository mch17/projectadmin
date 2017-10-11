import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { QuizQuestion } from "./question.modal";

@Injectable()
export class QuestionService {

  private coursesUrl = 'http://localhost:8080/api/quiz';
  private quizQuestionsUrl = 'http://localhost:8080/api/quizquestions';
  private url = 'http://localhost:8080/api/qqq1';
  
  constructor(private http: Http) { }


  addQuizQuestion(body: Object, id: number): Observable<QuizQuestion[]> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(`${this.coursesUrl}/${id}`, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch(this.handleError);
  }


 


  findquestionsById(id: number): Observable<QuizQuestion> {
    return this.http.get(`${this.quizQuestionsUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }


  private handleError(err) {
    let errMessage: string;

    if (err instanceof Response) {
      let body = err.json() || '';
      let error = body.error || JSON.stringify(body);
      errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
    } else {
      errMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errMessage);
  }
}
