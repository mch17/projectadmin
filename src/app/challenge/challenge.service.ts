import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Challenge } from "app/challenge/challenge.modal";
@Injectable()
export class ChallengeService {

  private ChallengeUrl = 'http://localhost:8080/api/challenge';

  constructor(private http: Http) { }
  createChallenge(body: Object): Observable<Challenge[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post(this.ChallengeUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any



  }


    getAllChallenges(): Observable<Challenge[]> {
    // ...using get request
    return this.http.get(this.ChallengeUrl)
      // ...and calling .json() on the response to return data
      .map((res: Response) => res.json())
      //...errors if any
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }



    findChallengeById(id: number): Observable<Challenge> {
    return this.http.get(`${this.ChallengeUrl}/${id}`).map((res: Response) => {
      return res.json();
    });
  }


   updateChallenge(body: Object): Observable<Challenge[]> {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.put(this.ChallengeUrl, body, options) // ...using post request
      .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any


   }
}
