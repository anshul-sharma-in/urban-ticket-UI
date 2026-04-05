import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl + '/auth/';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<any> {

    return this.httpClient.get<any[]>(API_URL + 'getmovies', { responseType: 'json'});
  }

  getManagersList(): Observable<any> {

    return this.httpClient.get<any[]>(API_URL + 'getmanagers', { responseType: 'json'});
  }

  getUsersList(): Observable<any> {

    return this.httpClient.get<any[]>(API_URL + 'getusers', { responseType: 'json'});
  }

  deleteMovies(id): Observable<any> {
    return this.httpClient.delete(API_URL + 'deletemoviebyid/'+ id, {responseType: 'text'})
  }

  deleteUser(id): Observable<any> {
    return this.httpClient.delete(API_URL + 'deleteuserbyid/'+ id, {responseType: 'text'})
  }

  deleteManager(id): Observable<any> {
    return this.httpClient.delete(API_URL + 'deletemanagerwithmovies/'+ id, {responseType: 'text'})
  }

}
