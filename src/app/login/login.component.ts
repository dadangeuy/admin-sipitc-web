import {Component, OnInit} from '@angular/core';
import {SessionStorage} from 'ngx-store';
import {Laboratory} from '../model/laboratory';
import {LaboratoryService} from '../service/laboratory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @SessionStorage({key: 'lab'}) lab: Laboratory;

  constructor(private service: LaboratoryService, private router: Router) {
  }

  ngOnInit() {
  }

  attemptLogin(name, password) {
    this.service.attemptLogin(name, password).subscribe(value => {
      alert('Login Berhasil');
      this.lab = value;
      this.router.navigate(['home']);
    });
  }
}
