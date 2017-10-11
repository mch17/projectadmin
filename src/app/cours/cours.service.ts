import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Cours } from "app/cours/cours.modal";
@Injectable()
export class CoursService {
  private CoursUrl = 'http://localhost:8080/api/cours';

  constructor(private http: Http) { }
  createCours(body: Object): Observable<Cours[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.CoursUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


  }
  getAllCours(): Observable<Cours[]> {
    // ...using get request
    return this.http.get(this.CoursUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  findCoursById(id: number): Observable<Cours> {
    return this.http.get(`${this.CoursUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }

}
