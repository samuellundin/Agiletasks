import { Component, OnInit } from '@angular/core';
import {UserService} from "../../service/user.service";
import {User} from "../../model/user.model";
import {convertRuleOptions} from "tslint/lib/configuration";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: any = {};


  confirmPassword: string = "";

  constructor(private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) {
    this.user = new User;
  }

  ngOnInit() {

  }

  registerNewUser(){
    this.userService.registerUser(this.user).subscribe(res =>{
      console.log(res);
    }, ()=>{
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    },()=>{
      this.toastrService.success("You have created a new user!", "Congratulations!");
      setTimeout(()=> {
        this.router.navigate(["/auth/login"]);
      },1000);

    })
  }

  confirmPasswords(){
    return this.user.password == this.user.confirmPassword;

  }

}
