import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  unauthorized: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {

  }

  login() {
    this.authenticationService.login(this.model).subscribe(() => {
    },error => {
      this.unauthorized = true;
    }, () => {
      this.router.navigate(['/dashboard']);
    });
  }

}
