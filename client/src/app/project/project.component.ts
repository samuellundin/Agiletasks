import { Component, OnInit } from '@angular/core';
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  model: any = {};
  userList: User[] = [];
  selectedUserList: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.userList = users;
      console.log(this.userList)
    }, error => {

    });
  }

  addUsers() {
    if(this.model.selectedUsers) {
      for(let user of this.model.selectedUsers) {
        let index = this.userList.indexOf(user);
        this.userList.splice(index, 1);
        this.selectedUserList.push(user);
      }
      this.model.selectedUsers = null;
    }
  }

  removeUser(user: User) {
    let index = this.selectedUserList.indexOf(user);
    this.selectedUserList.splice(index, 1);
    this.userList.push(user);
    this.model.selectedUsers = null;
  }
}
