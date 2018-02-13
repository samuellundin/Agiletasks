import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {USER} from "./api.url";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(user: User) {
    return this.http.post("http://localhost:4200/api/user/register", user);
  }

  login() {

  }

  getUserByEmail(email: string) {
    return this.http.get(USER.url + '/' + email + '/');
  }
}
