import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Section } from "app/cours/section.modal";

@Injectable()
export class SectionService {
 private sectionUrl = 'http://localhost:8080/api/cours';
 private url = 'http://localhost:8080/api/sbcours';
 private urlFind = 'http://localhost:8080/api/sbcours';
 private urlFind2= 'localhost:8080/api/sectionbyid';
  constructor(private http: Http) { }

  addSectionCours(body: Object, id: number): Observable<Section[]> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(`${this.sectionUrl}/${id}`, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch(this.handleError);
  }


getCoursSections(id: number): Observable<Section[]> {
    // ...using get request
    return this.http.get(`${this.url}/${id}`)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }

  
  findSectionById(id: number): Observable<Section> {
    return this.http.get(`${this.urlFind}/${id}`).map((res: Response) => {
      return res.json();
    });
  }



 
  findSectionSupportById(id: number): Observable<Section> {
    return this.http.get(`${this.urlFind2}/${id}`).map((res: Response) => {
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
