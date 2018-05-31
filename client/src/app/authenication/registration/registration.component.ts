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
    this.user.image = '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAB/AH8DASIAAhEBAxEB/8QAHAABAAMAAwEBAAAAAAAAAAAAAAYHCAEDBAUC/8QAORAAAQMDAQQGCAQHAQAAAAAAAQACAwQFESEGBxIxE1FhcYGhFCIjMkFCUpFDYnLBFRYkM0SCorH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A26iIgIiICIiAiIgIvxNUQUzOkqJ44m/U9waPNcQVVNVNL6WoimaDgmN4cB9kHYiIgIiICIiAiIgIiICIq+3i7fSWsvsNlk4asj+onHOEH5W/mI+PwHLXUB9zafb2ybNF1O95qqwf48R1b+o8m/8AvYq2vO83ae6Oc2nqBQQnkyn0djtedc92FFHOc9xe9xc5xySTkkrhB2T1NRVSGWqnkmeebpHFxPiVON2W1lnsckttuMLYHVbwfS86acmu6hqde3XrUDRBppFXW6va19XEdm7hKXSwN4qV7nauYObPD4dmepWKgIiICIiAiIgIiIOHuDGOeflBKzXVVMtZVTVc7syTyOkeetxOStKPbxscz6gQszOaWuLXDBBwQgIiICIiD6WzVbJb9oLfWRv4THUx5P5ScOHiCQtELNNOSKiIt58bcfdaWQEREBERAREQEREDks6X+JkN9uEUZaWNqpQwtOQW8RxjwV5bZ9P/ACrdDTyFjxTPOR1Aet5ZWfkBERAREQeyzRsmvFDFIQGvqYmuJOAAXDOVo4EEZByCsyrROzkbotnrZG8kubRwg56+AIPooiICIiAiIgIiIPFfKSSvstfQxDL6illiYPzFpA81nSSOSKR0UrHMewlrmuGCD1ELTCrTfFZ8x0V9ijHqk08zhzIOrPD3te0IKwREQEREHbSUs1bVQ0dO3ilne2Ng6yTgLSUMTYIY4W8o2ho7gMKstzMDHy3Sd8TXGMQhji3kTx5wVaCAiIgIiICIiAiIgLw3y0w3y0VVpnOG1EZaHfS7m13bggHwXuXku9SaO1VtY3nBTySD/VpP7IM4EYOEREBERBd+7WyPs2zUUkxHS17vSjj5WuaOEZ7gD3kqVrwWKenns9C6mka5no0RGDyHCML3oCIiAiIgIiICLxXK+We0N4rncqen+ID3gOPcOZ8FEbnvesNLllspKitcOTj7Jh8Tr5IJ2q73wXO4UdPbqSkrJYYqoTiZrHFvSABgAOOY9Y6dqjdz3q7T12WUjoKFh09kzidj9Ts+QCilbcK64y9PcKyapk5cUry448UHQiIgIiILC3N18cVzr7c73qmFkrTn6CQR/wB58CrYWaqSrqqCoZV0VRJBNHq2SNxa4aY5jsUstu9Xamhw2qkgrWDT20eHY72488oLpRQG2b4LNUYZdKCopHH5mESs/Y+RUttm0VjvIH8MulPO4jPAH4eO9p1H2QfRREQQC973bZSPfT2ehkrHtJb0sh6OPPWB7x17lCLtvD2ru2WvuJpYz+HSjox9/e81GySSSeZRBy975HF8ji5zjkknJJXCIgIiICIiAiIgIiICAlpDmkgjUEIiCRWjb/amzkNiuTqiIfhVPtG/c+sPAhTmyb3bTVARXulfRPA/uMzJGdOoDiGvwwe9VIiD/9k=';
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
