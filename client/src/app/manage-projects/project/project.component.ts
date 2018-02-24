import { Component, OnInit } from '@angular/core';
import {User} from "../../model/user.model";
import {UserService} from "../../service/user.service";
import {AuthenticationService} from "../../service/authentication.service";
import {ProjectService} from "../../service/project.service";
import {Project} from "../../model/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  model: any = {};
  userList: User[] = [];
  selectedUserList: User[] = [];
  projectList: Project[] = [];
  currentUser: any;
  selectedProject: Project;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private projectService: ProjectService) {}

  ngOnInit() {
    this.authenticationService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
    this.userService.getAllUsers().subscribe((users: User[]) => {
      this.userList = users;
    });
    this.projectService.getProjectsByUserId(this.currentUser.id).subscribe((projects: Project[]) => {
      this.projectList = projects;
      if(this.projectList) {
        this.selectedProject = this.projectList[0];
      }
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

  handleProjectChange() {
    console.log(this.selectedProject);
  }


}
