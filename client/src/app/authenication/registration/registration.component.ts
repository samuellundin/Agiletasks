import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  constructor(private userService: UserService ) {
    this.user = new User;
  }

  ngOnInit() {

  }

  registerNewUser(){
    console.log(this.user);
  }

}
