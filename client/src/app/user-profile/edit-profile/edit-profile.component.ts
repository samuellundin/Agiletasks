import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user.model";
import {AuthenticationService} from "../../service/authentication.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: any = {};



  constructor(private authenticationService: AuthenticationService,
              private userService: UserService) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser().subscribe(user => {
      this.user = user;
    })
  }

  confirmPasswords(){
    return this.user.password == this.user.confirmPassword;

  }

  updateUserDetails() {
    this.userService.updateUser(this.user).subscribe( res =>{
      console.log(res);
    });
  }

  updateUserPassword(){
    this.userService.updateUserPassword(this.user).subscribe(res =>{
      console.log(res);
    })
  }
}
