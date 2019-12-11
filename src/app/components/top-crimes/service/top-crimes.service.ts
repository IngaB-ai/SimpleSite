import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


import { Crimes } from '../crime.model';
import { Players } from '../../top-players/player.model';

@Injectable()
export class TopCrimesService {

  private crimesUrl = 'https://NflArrest.com/api/v1/crime';
  private topPlayersForCrime = 'ttps://NflArrest.com/api/v1/crime/topPlayers/CrimeID';
 

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return  catchError(this.handleError)
  }

  constructor(private http: HttpClient) { }

  /** GET crimes from the server */
  getCrimes(): Observable<Crimes[]> {
 

    return this
    .http
    .get<Crimes[]>(this.crimesUrl)
    .pipe(
    map(res => {
      console.log(res)
      return res;
    })
    )
  }

  /** GET crime by id */
  getCrimeTopPlayer(Category: string): Observable <Players []> {
    return this
    .http
    .get<Players[]>(this.crimesUrl+'/topPlayers/' + Category)
    .pipe(
    map(res => {
      console.log(res)
      return res;
    })
    )

  }
  // getCrimeTopPlayer(Category: string): Observable<Crimes> {
  //   return this.getCrimes()
  //     .pipe(
  //       map(crimes => {
  //         return crimes.find(crime => {
  //           return crime.Category === Category;
  //         });
  //       })
  //     );
  // }

}
