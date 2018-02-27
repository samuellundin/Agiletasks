import { Injectable } from '@angular/core';
import {User} from "../model/user.model";
import {HttpClient} from "@angular/common/http";
import {USER} from "./api.url";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }


  registerUser(user: User) {
    return this.http.post(USER.url +"/register", user);
  }

  updateUser(user: User){
    return this.http.put(USER.url + "/edit_user", user);
  }


  getUserByEmail(email: string) {
    return this.http.get(USER.url + '/' + email + '/');
  }

  getAllUsers() {
    return this.http.get(USER.url);
  }

  updateUserPassword(user: User) {
    return this.http.put(USER.url + "/changePassword", user);

  }
}
