import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {convertRuleOptions} from "tslint/lib/configuration";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: any = {};


  confirmPassword: string = "";

  constructor(private userService: UserService ) {
    this.user = new User;
  }

  ngOnInit() {

  }

  registerNewUser(){
    this.userService.registerUser(this.user).subscribe(res =>{
      console.log(res);
    })
  }

  confirmPasswords(){
    return this.user.password == this.user.confirmPassword;

  }

}
