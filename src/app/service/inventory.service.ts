import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';
import {RailsResponse} from '../model/rails-response';
import {map} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {Inventory} from '../model/inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl = 'https://siri-tc.herokuapp.com/inventory';
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private http: HttpClient) {
  }

  getAllInventories(labname: string): Observable<Inventory[]> {
    const api = `${this.baseUrl}/${labname}`;
    const auth = `${this.lab.name}:${this.lab.password}`;
    const headers = new HttpHeaders().set('Authorization', auth);
    this.http.get<RailsResponse>(api, {headers: headers}).subscribe(value => console.log(value));
    return this.http.get<RailsResponse>(api, {headers: headers}).pipe(
      map(value => {
        return value.body;
      }));
  }
}
