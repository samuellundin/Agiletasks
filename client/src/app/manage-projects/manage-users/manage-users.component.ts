import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../model/user.model";
import {Project} from "../../model/project.model";
import {UserService} from "../../service/user.service";
import {ProjectService} from "../../service/project.service";
import {ToastrService} from "ngx-toastr";

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

  movedUser: boolean = false;

  constructor(private userService: UserService,
              private projectService: ProjectService,
              private toastrService: ToastrService) {
  }

  ngOnInit() {
    this.title = "Loading Users...";
    this.currentProject = this.projectService.getCurrentProject();

    if (this.currentProject.userList != null) {
      this.addedUsers = this.currentProject.userList;
    }
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.filterUserlist(users);
    }, () => {

    }, () => {
      this.title = "All Users:"
    });
  }

  ngOnDestroy() {
    if(this.movedUser){
      this.saveUsers();
    }
  }

  filterUserlist(users: User[]) {
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

  saveUsers() {
    this.currentProject.userList = this.addedUsers;
    this.projectService.updateProject(this.currentProject).subscribe(res => {
      console.log(res);
    }, () => {
      this.toastrService.error("Something went wrong when trying to update the userlist, please try again!", "Error!");
    }, () => {
      this.toastrService.success("The userlist for project " + this.currentProject.projectName + " is now update!", "Congratulations!");
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
    this.movedUser = true;
  }

  handleRemoveUsers() {
    console.log(this.usersToRemove);
    this.usersToRemove.forEach(user => {
      let index = this.addedUsers.findIndex(selectedUser => selectedUser.id == user.id);
      this.addedUsers.splice(index, 1);
      this.allUsers.push(user);
    });
    this.usersToRemove = [];
    this.movedUser = true;
  }

}
