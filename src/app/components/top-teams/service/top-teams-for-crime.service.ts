import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Team } from '../team.model';


@Injectable()

export class TopTeamsForCrimeService {

 // URL to web api
 private productsUrl = 'NflArrest.com/api/v1/crime/topTeams/CrimeID';
 



  constructor() { }

}
