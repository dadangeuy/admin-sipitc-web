import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';
import {RailsResponse} from '../model/rails-response';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';
import {Observable} from 'rxjs';
import {Reservation} from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl = 'https://siri-tc.herokuapp.com/reservation';
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private http: HttpClient) {
  }

  acceptReservation(inventory_id): Observable<RailsResponse> {
    const url = `${this.baseUrl}/${inventory_id}`;
    const auth = `${this.lab.name}:${this.lab.password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    return this.http.put<RailsResponse>(url, {status: 'Diterima'}, {headers: headers});
  }

  rejectReservation(inventory_id): Observable<RailsResponse> {
    const url = `${this.baseUrl}/${inventory_id}`;
    const auth = `${this.lab.name}:${this.lab.password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    return this.http.put<RailsResponse>(url, {status: 'Ditolak'}, {headers: headers});
  }

  getAllReservation(): Observable<Reservation[]> {
    const api = `${this.baseUrl}/${this.lab.name}`;
    const auth = `${this.lab.name}:${this.lab.password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    return this.http.get<RailsResponse>(api, {headers: headers})
      .pipe(map(value => value.body));
  }
}
