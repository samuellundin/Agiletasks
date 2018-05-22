import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {Project} from "../../model/project.model";
import {UserService} from "../../service/user.service";
import {ProjectService} from "../../service/project.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit, OnDestroy {

  title: string;

  currentProject: Project;

  allUsers: User[] = [];
  addedUsers: User[] = [];

  usersToAdd: User[] = [];
  usersToRemove: User[] = [];

  constructor(private userService: UserService,
              private projectService: ProjectService) { }

  ngOnInit() {
    this.title = "Loading Users...";
    this.currentProject = this.projectService.getCurrentProject();

    if (this.currentProject.userList != null){
      this.addedUsers = this.currentProject.userList;
    }
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.filterUserlist(users);
    },()=>{

    },()=>{
      this.title = "All Users:"
    });
  }

  ngOnDestroy(){
    this.saveUsers();
  }

  filterUserlist(users: User[]){
    this.allUsers = users;
    for (let user of this.addedUsers) {
      for (let filterIndex of this.allUsers) {
        if (user.id == filterIndex.id) {
          let index = this.allUsers.indexOf(filterIndex);
          this.allUsers.splice(index, 1);
        }
      }
    }
  }

  saveUsers(){
    this.currentProject.userList = this.addedUsers;
    this.projectService.saveCurrentUserListToProject(this.currentProject).subscribe(res =>{
      console.log(res);
    })
  }

  handleAddUsers() {
    console.log(this.usersToAdd);
    this.usersToAdd.forEach(user => {
      let index = this.allUsers.findIndex(selectedUser => selectedUser.id == user.id);
      this.allUsers.splice(index, 1);
      this.addedUsers.push(user);
    });
    this.usersToAdd = [];
  }

  handleRemoveUsers() {
    console.log(this.usersToRemove);
    this.usersToRemove.forEach(user => {
      let index = this.addedUsers.findIndex(selectedUser => selectedUser.id == user.id);
      this.addedUsers.splice(index, 1);
      this.allUsers.push(user);
    });
    this.usersToRemove = [];
  }

}
