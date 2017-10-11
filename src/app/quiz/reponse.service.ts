import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { QuizReponse } from "./reponse.modal";
@Injectable()
export class ReponseService {
  private ReponsesUrl = 'http://localhost:8080/api/quizreponses';

private url = 'http://localhost:8080/api/aaaaaaaaa';




  constructor(private http: Http) { }

  addQuizReponses(body: Object , id: number): Observable<QuizReponse[]> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(`${this.ReponsesUrl}/${id}`, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch(this.handleError);
  }


 



getReponses(id: number): Observable<QuizReponse[]> {
    // ...using get request
    return this.http.get(`${this.url}/${id}`)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

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
