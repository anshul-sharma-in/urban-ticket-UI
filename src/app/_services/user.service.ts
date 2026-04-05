import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const API_URL = environment.apiUrl + '/test/';

const API_URL_MOVIE = environment.apiUrl + '/auth/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getManagerBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }

  getMovieDetails(): Observable<any> {
    return this.http.get(API_URL_MOVIE + 'getmovies' , { responseType: 'json'});
  }

  getMovieDetailsById(id): Observable<any> {
    return this.http.get<any[]>(API_URL_MOVIE + 'getmoviebyid/' + id, { responseType: 'json'});
  }

}
