import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  unauthorized: boolean = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private toastrService: ToastrService) { }

  ngOnInit() {

  }

  login() {
    this.authenticationService.login(this.model).subscribe(() => {
    },error => {
      this.unauthorized = true;
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    }, () => {
      this.toastrService.success("You are now logged in!", "Congratulations!");
      this.router.navigate(['/dashboard']);
    });
  }

}
