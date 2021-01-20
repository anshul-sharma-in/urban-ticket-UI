import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';

const API_URL = 'http://localhost:8080/api/auth/';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  // getUsersList(): Observable<any> {
  //   return this.httpClient.get(API_URL + 'getmovies', { responseType: 'text' });
  // }

  getMoviesList(): Observable<any> {

    return this.httpClient.get<Movie[]>(API_URL + 'getmovies', { responseType: 'json'});
  }
}
