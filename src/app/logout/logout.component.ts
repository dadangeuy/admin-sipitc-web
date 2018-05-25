import {Component, OnInit} from '@angular/core';
import {Laboratory} from '../model/laboratory';
import {SessionStorage} from 'ngx-store';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.lab = null;
    this.router.navigate(['login']);
    this.lab = null;
  }
}
