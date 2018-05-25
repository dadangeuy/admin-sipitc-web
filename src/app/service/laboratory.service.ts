import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RailsResponse} from '../model/rails-response';
import {Laboratory} from '../model/laboratory';
import {map} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  baseUrl = 'https://siri-tc.herokuapp.com/laboratory';

  constructor(private http: HttpClient) {
  }

  attemptLogin(name, password): Observable<Laboratory> {
    const auth = `${name}:${password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    return this.http.post<RailsResponse>(this.baseUrl, {}, {headers: headers})
      .pipe(map(value => value.body));
  }
}
