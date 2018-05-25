import {Component} from '@angular/core';
import {Laboratory} from './model/laboratory';
import {SessionStorage} from 'ngx-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  isLoggedIn(): boolean {
    return this.lab != null;
  }
}
