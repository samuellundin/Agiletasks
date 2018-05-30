import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user.model";
import {AuthenticationService} from "../../service/authentication.service";
import {UserService} from "../../service/user.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  cropperReady = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  user: any = {};

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser().subscribe(user => {
      user.password = "";
      this.user = JSON.parse(JSON.stringify(user));
    })
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
    console.log(image.length)
    this.user.image = image.split(',')[1];
  }
  imageLoaded() {
    this.cropperReady = true;
  }

  confirmPasswords(){
    return this.user.password == this.user.confirmPassword;
  }

  updateUserDetails() {
    this.userService.updateUser(this.user).subscribe( res =>{
      this.authenticationService.setCurrentUser(this.user);
      this.router.navigate(['/profile']);
    },()=> {
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    }, ()=>{
      this.toastrService.success("You have updated your profile!","Congratulations!");
    });
  }

  updateUserPassword(){
    this.userService.updateUserPassword(this.user).subscribe(res =>{
      console.log(res);
    },()=>{
      this.toastrService.error("Something went wrong, please try agin!", "Error!");
    },()=>{
      this.toastrService.success("You have updated your password!","Congratulations!");
    });
  }
}
